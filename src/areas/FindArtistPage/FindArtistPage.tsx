import React from "react";
import Container from "react-bootstrap/esm/Container";
import { artistQueryBuilder } from "src/api/helper";
import { ArtistFormType, ArtistType } from "src/utils/types";
import { ArtistCard } from "./components/ArtistCard";
import { ArtistModal } from "./components/ArtistModal";
import { ArtistForm } from "./components/ArtistForm";

export const FindArtistPage = () => {
  const artist1: ArtistType = { title: "title" };
  const [artists, setArtists] = React.useState<ArtistType[]>([
    artist1,
    artist1,
    artist1,
    artist1,
    artist1,
    artist1,
    artist1,
    artist1,
    artist1,
    artist1,
    artist1,
    artist1,
    artist1,
    artist1,
  ]);

  const [showModal, setShowModal] = React.useState(false);
  const [selectedArtist, setSelectedArtist] = React.useState<ArtistType | null>(
    null
  );

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  const executeQuery = (form: ArtistFormType) => {
    //call api to fill cards
    const query = artistQueryBuilder(form);
    console.log(form);
  };

  return (
    <Container>
      <ArtistModal
        artist={selectedArtist}
        handleCloseModal={() => handleCloseModal()}
        showModal={showModal}
      />
      <ArtistForm handleSubmit={executeQuery} />
      {artists.map((artist) => (
        <ArtistCard
          artist={artist}
          handleClick={() => {
            setSelectedArtist(artist1);
            handleShowModal();
          }}
        />
      ))}
    </Container>
  );
};
