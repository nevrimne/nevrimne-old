import { pgTable, text, uuid } from "drizzle-orm/pg-core";

export const profilesTable = pgTable("profiles", {
  id: uuid("id").primaryKey(),
  username: text("username").unique().notNull(),
});
