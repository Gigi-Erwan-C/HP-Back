-- Revert harrypotter:HP_revision3 from pg

BEGIN;

ALTER TABLE "student"
  DROP CONSTRAINT "unique_student";

COMMIT;
