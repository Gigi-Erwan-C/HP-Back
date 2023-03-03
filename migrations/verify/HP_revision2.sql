-- Verify harrypotter:HP_revision2 on pg

BEGIN;

DELETE FROM "student" WHERE "id" = 1;

ROLLBACK;
