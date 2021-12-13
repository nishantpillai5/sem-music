import React from "react";
import CardGroup from "react-bootstrap/esm/CardGroup";
import { AlbumType } from "src/utils/types";
import { AlbumInfo } from "./components/AlbumInfo";

export const FindAlbumPage = () => {
  const album1: AlbumType = { title: "title" };
  return (
    <CardGroup>
      {/* List of Albuminfo, pass each item as props */}
      <AlbumInfo album={album1} />
    </CardGroup>
  );
};
