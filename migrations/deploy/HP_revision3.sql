-- Deploy harrypotter:HP_revision3 to pg

BEGIN;

ALTER TABLE "student"
  ADD CONSTRAINT "unique_student"
    UNIQUE(firstname, lastname);

COMMIT;
