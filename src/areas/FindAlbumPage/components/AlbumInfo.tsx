import React from "react";

import Card from "react-bootstrap/esm/Card";
import ListGroup from "react-bootstrap/esm/ListGroup";
import ListGroupItem from "react-bootstrap/esm/ListGroupItem";
import { AlbumType } from "../../../utils/types";

type AlbumInfoProps = {
  album: AlbumType;
};

export const AlbumInfo = ({ album }: AlbumInfoProps) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Title</Card.Title>
        <Card.Subtitle>Artist</Card.Subtitle>
        <ListGroup className="list-group-flush">
          <ListGroupItem>Length:</ListGroupItem>
          <ListGroupItem>Release date:</ListGroupItem>
          <ListGroupItem>Genre: </ListGroupItem>
        </ListGroup>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
  );
};
