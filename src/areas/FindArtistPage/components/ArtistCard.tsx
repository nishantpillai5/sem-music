import React from "react";
import Card from "react-bootstrap/esm/Card";
import Stack from "react-bootstrap/esm/Stack";
import { StoreContext } from "src/store/Store";
import { ArtistFetchType } from "src/utils/types";

type ArtistCardProps = {
  artist: ArtistFetchType;
  handleClick: () => void;
};

export const ArtistCard = ({ artist, handleClick }: ArtistCardProps) => {
  const { storeState } = React.useContext(StoreContext);

  return (
    <Card onClick={handleClick} className="m-2">
      <Card.Body>
        <Card.Title>{artist.label.value}</Card.Title>
        <Card.Subtitle>
          {artist.startYear ? artist.startYear.value : ""}-
          {artist.endYear ? artist.endYear.value : ""}
        </Card.Subtitle>
        {artist.comment ? artist.comment.value : ""}
        <Stack direction="horizontal" gap={3}>
          {artist.genres
            ? artist.genres.value
                .split(",")
                .map((genre) => (
                  <div className="bg-light border">
                    {storeState.genres[genre].label.value}
                  </div>
                ))
            : ""}
        </Stack>
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
