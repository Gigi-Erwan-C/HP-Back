-- Deploy harrypotter:create_views_to_get_scores to pg

BEGIN;

-- Création d'une VIEW pour récupérer le score total des étudiants (score de base + total des points obtenus dans la table "point")
CREATE VIEW "students_total_score" AS
  SELECT
    "firstname",
    "lastname",
    "house"."name" AS "house_name",
    "student"."score" AS "student_base_score",
    SUM ("point"."value") + "student"."score"::INT AS "score_from_point",
    -- On utilise la fonction COALESCE pour afficher uniquement le score de base de l'élève si il n'a aucun point dans la table "point"
    COALESCE (SUM ("point"."value") + "student"."score", "student"."score")::INT AS "total_score"
  FROM "student"
  LEFT OUTER JOIN "point" ON "student"."id" = "student_id"
  JOIN "house" ON "house"."id" = "student"."house_id"
  GROUP BY
    "student"."id",
    "house"."id";

-- Création d'une VIEW pour récupérer le score d'une maison obtenu par les élèves. On récupère ce score depuis la vue créée précédemment et en faisant la somme des scores des élèves appartenant à la même maison
CREATE VIEW "houses_score_from_students" AS
  SELECT
    "house_name",
    SUM ("total_score")::INT AS "total_score"
  FROM "students_total_score"
  GROUP BY "house_name";

-- Création d'une VIEW pour récupérer le score d'une maison depuis la table point (score de base + total des points obtenus dans la table "point")
CREATE VIEW "houses_score_from_points" AS
  SELECT
    "house"."id",
    "house"."name" AS "house_name",
    "score" AS "house_base_score",
    SUM("point"."value")::INT AS "score_from_points",
    COALESCE (SUM("point"."value") + "house"."score", "house"."score")::INT AS "total_score"
  FROM "house"
  LEFT OUTER JOIN "point" ON "house"."id" = "house_id"
  GROUP BY "house"."id"
  ORDER BY "total_score";

-- Création d'une VIEW pour récupérer le score total d'une maison
CREATE VIEW "houses_total_score" AS
  SELECT
    "house"."id",
    "house"."name",
    "house"."name_in_english",
    SUM ("houses_score_from_students"."total_score") + SUM("houses_score_from_points"."total_score") AS "houses_total_score"
  FROM "house"
  JOIN "houses_score_from_students" ON "house"."name" = "houses_score_from_students"."house_name"
  JOIN "houses_score_from_points" ON "house"."name" = "houses_score_from_points"."house_name"
  GROUP BY
    "house"."id"
  ORDER BY "houses_total_score" DESC NULLS LAST;

COMMIT;
