-- Verify harrypotter:create_views_to_get_scores on pg


BEGIN;

SELECT * FROM "students_total_score";
SELECT * FROM "houses_score_from_students";
SELECT * FROM "houses_score_from_points";
SELECT * FROM "houses_total_score";

ROLLBACK;
