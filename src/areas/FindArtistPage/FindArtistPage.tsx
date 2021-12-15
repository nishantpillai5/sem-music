import React from "react";
import CardGroup from "react-bootstrap/esm/CardGroup";
import Container from "react-bootstrap/esm/Container";
import { artistQueryBuilder } from "src/api/helper";
import { ArtistType } from "src/utils/types";
import { ArtistCard } from "./components/ArtistCard";
import { ArtistModal } from "./components/ArtistModal";
import { ArtistForm } from "./components/ArtistForm";

export const FindArtistPage = () => {
  const artist1: ArtistType = { title: "title" };

  const [showModal, setShowModal] = React.useState(false);
  const [selectedArtist, setSelectedArtist] = React.useState<ArtistType | null>(
    null
  );

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  const executeQuery = () => {
    //call api to fill cards
    artistQueryBuilder("form");
  };

  return (
    <Container>
      <ArtistModal
        artist={selectedArtist}
        handleCloseModal={() => handleCloseModal()}
        showModal={showModal}
      />
      <ArtistForm handleSubmit={executeQuery} />
      <CardGroup>
        <ArtistCard
          artist={artist1}
          handleClick={() => {
            setSelectedArtist(artist1);
            handleShowModal();
          }}
        />
      </CardGroup>
    </Container>
  );
};
