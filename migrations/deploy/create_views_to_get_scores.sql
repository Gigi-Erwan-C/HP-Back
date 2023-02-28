-- Deploy harrypotter:create_views_to_get_scores to pg

BEGIN;

-- CREATION D'UNE VIEW POUR RECUPERER LE SCORE TOTAL D'UN ETUDIANT
CREATE VIEW "students_total_score" AS
SELECT
	"firstname",
    "lastname",
    "student"."score",
    "house"."name" AS "house_name",
    COALESCE (SUM ("point"."value") + "student"."score", "student"."score") AS "student_total_score"
    FROM "student"
    LEFT OUTER JOIN "point" ON "student"."id" = "student_id"
    JOIN "house" ON "house"."id" = "student"."house_id"
    GROUP BY
    "student"."id",
    "house"."name";

-- CREATION D'UNE VIEW POUR RECUPERER LE SCORE TOTAL D'UNE MAISON DEPUIS LA TABLE STUDENT
CREATE VIEW "house_total_score_from_students" AS
SELECT
	"house_name",
	SUM ("student_total_score") AS "house_score_from_students"
FROM "students_total_score"
GROUP BY "house_name";

-- CREATION D'UNE VIEW POUR RECUPERER LE SCORE TOTAL D'UNE MAISON DEPUIS LA TABLE POINT
CREATE VIEW "house_total_score_from_points" AS
SELECT
	"house"."id",
    "name" AS "house_name",
	"score",
    COALESCE (SUM ("point"."value") + "house"."score", "house"."score") AS "house_score_from_points"
    FROM "house"
    LEFT OUTER JOIN "point" ON "house"."id" = "house_id"
    GROUP BY "house"."id"
    ORDER BY "house_score_from_points";

COMMIT;
