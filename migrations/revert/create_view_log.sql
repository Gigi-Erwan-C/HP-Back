-- Revert harrypotter:create_view_log from pg

BEGIN;

-- Suppression de la view
DROP VIEW "student_with_house_name";

COMMIT;
