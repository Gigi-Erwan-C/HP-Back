-- Revert harrypotter:init from pg

BEGIN;

DROP TABLE "role",
"user",
"house",
"student",
"point";

COMMIT;
