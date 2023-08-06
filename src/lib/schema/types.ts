import { InferModel } from "drizzle-orm";
import {
  albumsTable,
  artistsTable,
  genresTable,
  profilesTable,
  tracksTable,
} from "./tables";

export type Profile = InferModel<typeof profilesTable>;
export type Artist = InferModel<typeof artistsTable>;
export type Album = InferModel<typeof albumsTable>;
export type Track = InferModel<typeof tracksTable>;
export type Genre = InferModel<typeof genresTable>;
