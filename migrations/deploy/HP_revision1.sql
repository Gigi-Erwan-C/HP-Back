-- Deploy harrypotter:HP_revision1 to pg

BEGIN;

ALTER TABLE
 "house"
 ALTER COLUMN
 "score" DROP NOT NULL,
 ADD COLUMN
 "name_in_english" TEXT UNIQUE;

ALTER TABLE
 "student"
 RENAME COLUMN
 "class" TO "class_name";

ALTER TABLE
 "student"
 ALTER COLUMN
 "class_name" DROP NOT NULL,
 ALTER COLUMN
 "score" DROP NOT NULL,
 ALTER COLUMN
 "house_id" DROP NOT NULL;


COMMIT;
