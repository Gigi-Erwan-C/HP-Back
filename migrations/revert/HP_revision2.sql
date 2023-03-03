-- Revert harrypotter:HP_revision2 from pg

BEGIN;

ALTER TABLE
  "point"
  ALTER COLUMN
  "student_id" DROP ON DELETE CASCADE;

COMMIT;
