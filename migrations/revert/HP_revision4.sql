-- Revert harrypotter:HP_revision4 from pg

BEGIN;

ALTER TABLE "point"
  DROP CONSTRAINT "point_user_id_fkey",
  ADD CONSTRAINT "point_user_id_fkey"
    FOREIGN KEY ("user_id")
    REFERENCES "user"("id");

COMMIT;
