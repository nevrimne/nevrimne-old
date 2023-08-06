import type { Config } from "drizzle-kit";
import "dotenv/config";

export default {
  schema: "./src/lib/schema/tables/*.ts",
  out: "./drizzle",
  driver: "pg",
  dbCredentials: {
    connectionString: process.env.DATABASE_CONN_URL || "",
  },
} satisfies Config;
