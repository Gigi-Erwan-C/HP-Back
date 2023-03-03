-- Deploy harrypotter:HP_revision2 to pg

BEGIN;

ALTER TABLE
  "point"
  ALTER COLUMN
  "student_id" SET ON DELETE CASCADE;

COMMIT;
