import React from "react";
import CardGroup from "react-bootstrap/esm/CardGroup";
import { ArtistType } from "src/utils/types";
import { ArtistInfo } from "./components/ArtistInfo";

export const FindArtistPage = () => {
  const artist1: ArtistType = { title: "title" };

  return (
    <CardGroup>
      <ArtistInfo artist={artist1} />
    </CardGroup>
  );
};
