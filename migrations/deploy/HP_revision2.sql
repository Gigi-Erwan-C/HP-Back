-- Deploy harrypotter:HP_revision2 to pg

BEGIN;

ALTER TABLE "point"
  DROP CONSTRAINT "point_student_id_fkey",
  ADD CONSTRAINT "point_student_id_fkey"
    FOREIGN KEY ("student_id")
    REFERENCES "student"("id") ON DELETE CASCADE;

COMMIT;
