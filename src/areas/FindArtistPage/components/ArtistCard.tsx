import React from "react";
import Button from "react-bootstrap/esm/Button";

import Card from "react-bootstrap/esm/Card";
import ListGroup from "react-bootstrap/esm/ListGroup";
import ListGroupItem from "react-bootstrap/esm/ListGroupItem";
import { ArtistFetchType } from "src/utils/types";

type ArtistCardProps = {
  artist: ArtistFetchType;
  handleClick: () => void;
};

export const ArtistCard = ({ artist, handleClick }: ArtistCardProps) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{artist.label.value}</Card.Title>
        <Card.Subtitle>
          {artist.startYear ? artist.startYear.value : ""}-
          {artist.endYear ? artist.endYear.value : ""}
        </Card.Subtitle>
        <ListGroup className="list-group-flush">
          <ListGroupItem>Link: {artist.data.value}</ListGroupItem>
          <ListGroupItem>Link: {artist.url.value}</ListGroupItem>
        </ListGroup>
        <Button variant="secondary" onClick={handleClick}>
          More Info
        </Button>
      </Card.Body>
    </Card>
  );
};
