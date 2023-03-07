-- Verify harrypotter:HP_revision3 on pg

BEGIN;

INSERT INTO "student" ("lastname", "firstname", "class_name", "score", "house_id")
VALUES ('D', 'Jean', '3e', 0, 1);

ROLLBACK;
