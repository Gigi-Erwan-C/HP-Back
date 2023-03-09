-- Deploy harrypotter:HP_revision4 to pg

BEGIN;

ALTER TABLE "point"
  DROP CONSTRAINT "point_user_id_fkey",
  ADD CONSTRAINT "point_user_id_fkey"
    FOREIGN KEY ("user_id")
    REFERENCES "user"("id") ON DELETE CASCADE;

COMMIT;
