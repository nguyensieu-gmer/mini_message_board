#! /usr/bin/env node

const { Client } = require("pg");
const { loadEnvFile } = require("node:process");
loadEnvFile();

const SQL_TABLE = `
CREATE TABLE IF NOT EXISTS usermessages(
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    text VARCHAR(255),
    username VARCHAR(50),
    added DATE
);
`;
const SQL_INSERT = `INSERT INTO usermessages(text, username, added) VALUES 
    ('Hi there!', 'Amando', $1),
    ('Hello World!', 'Charles', $1)
`;

const now = new Date().toISOString().split("T")[0];
async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
  });
  await client.connect();
  await client.query(SQL_TABLE);
  await client.query(SQL_INSERT, [now]);
  await client.end();
  console.log("end");
}

main();
