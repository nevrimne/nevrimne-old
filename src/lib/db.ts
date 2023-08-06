import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema/tables";

const connStr = process.env.DATABASE_CONN_URL || "";
const client = postgres(connStr);
export const db = drizzle(client, { schema });
