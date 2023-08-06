import { pgTable, text, uuid } from "drizzle-orm/pg-core";

export const genresTable = pgTable("genres", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name").unique().notNull(),
});
