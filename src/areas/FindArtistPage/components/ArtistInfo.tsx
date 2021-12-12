import React from "react";

import Card from "react-bootstrap/esm/Card";
import ListGroup from "react-bootstrap/esm/ListGroup";
import ListGroupItem from "react-bootstrap/esm/ListGroupItem";
import { ArtistType } from "../../../utils/types";

type ArtistInfoProps = {
  artist: ArtistType;
};

export const ArtistInfo = ({ artist }: ArtistInfoProps) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Title</Card.Title>
        <Card.Subtitle>Location</Card.Subtitle>
        <ListGroup className="list-group-flush">
          <ListGroupItem>Genre: </ListGroupItem>
        </ListGroup>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
  );
};
