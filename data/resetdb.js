require('dotenv').config();

const { Client } = require('pg');

async function resetData(client) {
  await client.query(
    `
    BEGIN;

    TRUNCATE
      "point",
      "user",
      "student",
      "house",
      "role"
    RESTART IDENTITY;

    INSERT INTO "role" ("name")
    VALUES
      ('Admin'),
      ('Professeur');

    INSERT INTO "user" ("lastname", "firstname", "email", "password", "role_id")
    VALUES ('admin', 'admin', 'admin@admin.fr', 'admin', 1);

    INSERT INTO "house" ("name", "score", "name_in_english")
    VALUES
      ('Serdaigle', 0, 'Ravenclaw'),
      ('Gryffondor', 0, 'Gryffindor'),
      ('Poufsouffle', 0, 'Hufflepuff'),
      ('Serpentard', 0, 'Slytherin');

    COMMIT;
      `,
  );
}

(async () => {
  const client = new Client(process.env.DATABASE_URL);
  await client.connect();
  await resetData(client);
  client.end();
  /* eslint-disable-next-line */
  console.log('Reset terminé');
})();
