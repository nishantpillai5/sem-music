import React from "react";
import Accordion from "react-bootstrap/esm/Accordion";
import Button from "react-bootstrap/esm/Button";

import Card from "react-bootstrap/esm/Card";
import { ArtistFetchType } from "src/utils/types";

type ArtistCardProps = {
  artist: ArtistFetchType;
  handleClick: () => void;
};

export const ArtistCard = ({ artist, handleClick }: ArtistCardProps) => {
  return (
    <Card onClick={handleClick} className="m-2">
      <Card.Body>
        <Card.Title>{artist.label.value}</Card.Title>
        <Card.Subtitle>
          {artist.startYear ? artist.startYear.value : ""}-
          {artist.endYear ? artist.endYear.value : ""}
        </Card.Subtitle>
        {artist.comment ? artist.comment.value : ""}
        {/* <ListGroup className="list-group-flush">
          <ListGroupItem>Link: {artist.data.value}</ListGroupItem>
          <ListGroupItem>Link: {artist.url.value}</ListGroupItem>
  </ListGroup>*/}
        {/* <Button variant="secondary" onClick={handleClick}>
          More Info
        </Button> */}
      </Card.Body>
    </Card>
  );
};
