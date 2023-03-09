-- Verify harrypotter:HP_revision4 on pg

BEGIN;

DELETE FROM "user" WHERE "id" = 1;

ROLLBACK;
