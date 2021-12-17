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
        <Stack direction="horizontal">
          <div className="me-auto">
            <Card.Title>{artist.label.value}</Card.Title>
            <Card.Subtitle>
              {artist.startYear ? artist.startYear.value : ""}-
              {artist.endYear ? artist.endYear.value : ""}
            </Card.Subtitle>
            {artist.comment ? artist.comment.value : ""}
            <Stack direction="horizontal" gap={3}>
              {artist.genres
                ? Array.from(new Set(artist.genres.value.split(","))).map(
                    (genre: string) => (
                      <div className="bg-light border">
                        {storeState.genres[genre].label.value}
                      </div>
                    )
                  )
                : ""}
            </Stack>
          </div>
          <div>
            <div
              style={{
                width: 200,
                height: 200,
              }}
            >
              {artist.pic && (
                <img
                  alt="Artist"
                  src={artist.pic.value}
                  className="img-thumbnail img-responsive"
                  style={{ width: "100%", height: "100%" }}
                />
              )}
            </div>
          </div>
        </Stack>
      </Card.Body>
    </Card>
  );
};
