import {
  pgTable,
  primaryKey,
  text,
  timestamp,
  uuid,
} from "drizzle-orm/pg-core";
import { artistsTable } from "./artists";
import { albumsTable } from "./albums";

export const tracksTable = pgTable("tracks", {
  id: uuid("id").notNull().primaryKey().defaultRandom(),
  artist_id: uuid("id")
    .references(() => artistsTable.id)
    .notNull(),
  album_id: uuid("id")
    .references(() => albumsTable.id)
    .notNull(),
  title: text("title").notNull(),
  created_at: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
  updated_at: timestamp("updated_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
  released_at: timestamp("released_at", { withTimezone: true }).notNull(),
});

export const trackGenresTable = pgTable(
  "track_genres",
  {
    track_id: uuid("track_id").notNull(),
    genre_id: uuid("genre_id").notNull(),
  },
  (table) => {
    return {
      pk: primaryKey(table.track_id, table.genre_id),
    };
  }
);
