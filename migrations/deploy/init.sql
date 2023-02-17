-- Deploy harrypotter:init to pg

BEGIN;

DROP TABLE IF EXISTS "role",
"user",
"house",
"student",
"point";

CREATE TABLE IF NOT EXISTS "role" (
  "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "name" TEXT NOT NULL UNIQUE,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  "updated_at" TIMESTAMPTZ
);

CREATE TABLE IF NOT EXISTS "user" (
  "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "lastname" TEXT NOT NULL,
  "firstname" TEXT NOT NULL,
  "email" TEXT NOT NULL UNIQUE,
  "password" TEXT NOT NULL,
  "role_id" INT NOT NULL REFERENCES "role"("id"),
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  "updated_at" TIMESTAMPTZ
);

CREATE TABLE IF NOT EXISTS "house" (
  "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "name" TEXT NOT NULL UNIQUE,
  "score" INT NOT NULL DEFAULT 0,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  "updated_at" TIMESTAMPTZ
);

CREATE TABLE IF NOT EXISTS "student" (
  "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "lastname" TEXT NOT NULL,
  "firstname" TEXT NOT NULL,
  "class" TEXT NOT NULL,
  "score" INT NOT NULL DEFAULT 0,
  "house_id" INT NOT NULL REFERENCES "house"("id"),
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  "updated_at" TIMESTAMPTZ
);

CREATE TABLE IF NOT EXISTS "point" (
  "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "value" INT NOT NULL,
  "content" TEXT NOT NULL,
  "user_id" INT NOT NULL REFERENCES "user"("id"),
  "house_id" INT REFERENCES "house"("id"),
  "student_id" INT REFERENCES "student"("id"),
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  "updated_at" TIMESTAMPTZ
);

COMMIT;
