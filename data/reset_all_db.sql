
BEGIN;

TRUNCATE
  "point",
	"user",
	"student",
  "house",
  "role"
RESTART IDENTITY;

INSERT INTO "role"
("name")
VALUES
('Admin'),
('Professeur')
;
INSERT INTO "user" ("lastname", "firstname", "email", "password", "role_id")
VALUES ('admin', 'admin', 'admin@admin.fr', 'admin', 1);

INSERT INTO "house"
("name", "score")
VALUES
('Serdaigle', 0, 'Ravenclaw'),
('Gryffondor', 0, 'Gryffindor'),
('Poufsouffle', 0, 'Hufflepuff'),
('Serpentard', 0, 'Slytherin');

COMMIT;
