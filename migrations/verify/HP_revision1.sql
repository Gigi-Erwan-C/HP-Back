-- Verify harrypotter:HP_revision1 on pg

BEGIN;

INSERT INTO
  "house" (
    "name",
    "name_in_english"
  )
VALUES
  (
    'Gigi',
    'Erwan'
  );

INSERT INTO
  "student" (
    "lastname",
    "firstname",
    "class_name"
  )
VALUES
  (
    'Wayne',
    'Bruce',
    '3eA'
  );

TRUNCATE TABLE "house",
"student", "point" RESTART IDENTITY;

ROLLBACK;
