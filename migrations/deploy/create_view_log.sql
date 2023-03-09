-- Deploy harrypotter:create_view_log to pg

BEGIN;

-- Création d'une view pour récupérer les noms des maisons de tous les élèves
CREATE VIEW "student_with_house_name" AS
  SELECT
        "student".*,
        "house"."name" AS "house_name"
      FROM "student"
      JOIN "house" ON "house_id" = "house"."id"
      ;

COMMIT;
