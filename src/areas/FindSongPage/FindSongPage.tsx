import { SongType } from "@sem-music/utils/types";
import React from "react";
import CardGroup from "react-bootstrap/esm/CardGroup";
import { SongInfo } from "./components/SongInfo";

export const FindSongPage = () => {
  const song1: SongType = { title: "title" };

  return (
    <CardGroup>
      <SongInfo song={song1} />
    </CardGroup>
  );
};
