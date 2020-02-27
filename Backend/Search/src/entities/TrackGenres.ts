import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Tracks } from "./Tracks";

@Entity("track_genres", { schema: "yoyo" })
export class TrackGenres {
  @PrimaryGeneratedColumn({ type: "int", name: "idx" })
  idx: number;

  @Column("varchar", { name: "name", length: 45 })
  name: string;

  @OneToMany(
    () => Tracks,
    tracks => tracks.genreIdx2
  )
  tracks: Tracks[];
}
