-- Revert harrypotter:create_views_to_get_scores from pg

BEGIN;

DROP VIEW
  "house_total_score_from_points",
  "house_total_score_from_students",
  "students_total_score";

COMMIT;
