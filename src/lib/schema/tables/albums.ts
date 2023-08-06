import {
  pgTable,
  primaryKey,
  text,
  timestamp,
  uuid,
} from "drizzle-orm/pg-core";
import { artistsTable } from "./artists";

export const albumsTable = pgTable("albums", {
  id: uuid("id").primaryKey().defaultRandom(),
  artist_id: uuid("artist_id")
    .references(() => artistsTable.id)
    .notNull(),
  title: text("title").notNull().default("New Album"),
  created_at: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
  updated_at: timestamp("updated_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
  released_at: timestamp("released_at", { withTimezone: true }).notNull(),
});

export const albumGenresTable = pgTable(
  "album_genres",
  {
    album_id: uuid("album_id").notNull(),
    genre_id: uuid("genre_id").notNull(),
  },
  (table) => {
    return {
      pk: primaryKey(table.album_id, table.genre_id),
    };
  }
);
