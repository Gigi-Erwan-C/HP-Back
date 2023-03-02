-- Revert harrypotter:create_views_to_get_scores from pg

BEGIN;

DROP VIEW
  "houses_total_score",
  "houses_score_from_points",
  "houses_score_from_students",
  "students_total_score";

COMMIT;
