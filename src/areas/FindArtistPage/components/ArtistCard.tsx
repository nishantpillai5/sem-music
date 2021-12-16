import React from "react";
import Button from "react-bootstrap/esm/Button";

import Card from "react-bootstrap/esm/Card";
import ListGroup from "react-bootstrap/esm/ListGroup";
import ListGroupItem from "react-bootstrap/esm/ListGroupItem";
import { FetchType } from "src/utils/types";

type ArtistCardProps = {
  artist: string;
  handleClick: () => void;
};

export const ArtistCard = ({ artist, handleClick }: ArtistCardProps) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{artist}</Card.Title>
        <Card.Subtitle>{artist}</Card.Subtitle>
        <ListGroup className="list-group-flush">
          <ListGroupItem>Genre: </ListGroupItem>
        </ListGroup>
        <Button variant="primary" onClick={handleClick}>
          Show Modal
        </Button>
      </Card.Body>
    </Card>
  );
};
