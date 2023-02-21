-- SQLBook: Code
BEGIN;

TRUNCATE "role",
"user",
"house",
"student",
"point" RESTART IDENTITY;

INSERT INTO "role"
("name")
VALUES
('Admin'),
('Professeur')
;

INSERT INTO "user"
("lastname", "firstname", "email", "password", "role_id")
VALUES
('Master', 'Axel', 'axel@harrypotter.fr', 'azerty', 1),
('Rossi', 'Valentino', 'master@motolegend.it', 'azerty', 2)
;

INSERT INTO "house"
("name", "score")
VALUES
('Serdaigle', 22),
('Gryffondor', 74521),
('Poufsouffle', 46),
('Serpentard', 7)
;

INSERT INTO "student"
("lastname", "firstname", "class", "score", "house_id")
VALUES
('Laf', 'JM', '3B', 0, 2),
('Res', 'David', '4A', 0, 1),
('Mus', 'Lau', '4C', 0, 3),
('Moy', 'Mat', '4P', 0, 4),
('Ros', 'Gi', '3C', 0, 2)
;

INSERT INTO "point"
("value", "content", "user_id", "house_id", "student_id")
VALUES
(10, 'GO weekend', 1, 1, 1),
(-12, 'Dégage', 2, 4, 4),
(22, 'Back meilleur que front', 1, 2, 1)
;

COMMIT;