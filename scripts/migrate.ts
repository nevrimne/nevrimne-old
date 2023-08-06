import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";

import "dotenv/config";

const connStr = process.env.DATABASE_CONN_URL || "";
const client = postgres(connStr);
const db = drizzle(client);

async function runMigration() {
  console.log("Starting DB migration...");
  await migrate(db, { migrationsFolder: "./drizzle" });
}

runMigration()
  .then(() => {
    console.log("DB migration finished successfully");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
