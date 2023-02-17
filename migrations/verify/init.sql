-- Verify harrypotter:init on pg

BEGIN;

SELECT
  "id",
  "name"
FROM
  "role";

SELECT
  "id",
  "lastname",
  "firstname",
  "email",
  "password",
  "role_id"
FROM
"user";

SELECT
  "id",
  "name",
  "score"
FROM
  "house";

SELECT
  "id",
  "lastname",
  "firstname",
  "class",
  "score",
  "house_id"
FROM
  "student";

SELECT
  "id",
  "value",
  "content",
  "user_id",
  "house_id",
  "student_id"
FROM
  "point";

ROLLBACK;
