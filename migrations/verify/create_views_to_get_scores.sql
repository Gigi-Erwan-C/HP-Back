-- Verify harrypotter:create_views_to_get_scores on pg

BEGIN;

SELECT * FROM "students_total_score";
SELECT * FROM "house_total_score_from_students";
SELECT * FROM "house_total_score_from_points";

ROLLBACK;
