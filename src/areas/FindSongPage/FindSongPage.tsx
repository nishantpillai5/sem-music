import React from "react";
import CardGroup from "react-bootstrap/esm/CardGroup";
import { SongType } from "src/utils/types";
import { SongInfo } from "./components/SongInfo";

export const FindSongPage = () => {
  const song1: SongType = { title: "title" };

  return (
    <CardGroup>
      <SongInfo song={song1} />
    </CardGroup>
  );
};
