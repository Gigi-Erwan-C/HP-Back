-- Revert harrypotter:HP_revision1 from pg

BEGIN;

ALTER TABLE
 "house"
 ALTER COLUMN
 "score" SET NOT NULL,
 DROP COLUMN
 "name_in_english";

ALTER TABLE
 "student"
 RENAME COLUMN
 "class_name" TO "class";

ALTER TABLE
 "student"
 ALTER COLUMN
 "class" SET NOT NULL,
 ALTER COLUMN
 "score" SET NOT NULL,
 ALTER COLUMN
 "house_id" SET NOT NULL;

COMMIT;
