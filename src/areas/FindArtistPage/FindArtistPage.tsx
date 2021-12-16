import React from "react";
import Container from "react-bootstrap/esm/Container";
import {
  ArtistFetchType,
  ArtistFormType,
  FetchDictionary,
} from "src/utils/types";
import { ArtistCard } from "./components/ArtistCard";
import { ArtistModal } from "./components/ArtistModal";
import { ArtistForm } from "./components/ArtistForm";
import { getArtists } from "src/api/dbpedia";

export const FindArtistPage = () => {
  const [artists, setArtists] = React.useState<
    FetchDictionary<ArtistFetchType>
  >({});

  const [showModal, setShowModal] = React.useState(false);
  const [selectedArtist, setSelectedArtist] =
    React.useState<ArtistFetchType | null>(null);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  const executeQuery = async (form: ArtistFormType) => {
    const results = await getArtists(form);
    setArtists(results);
  };

  return (
    <Container>
      <ArtistModal
        artist={selectedArtist}
        handleCloseModal={() => handleCloseModal()}
        showModal={showModal}
      />
      <ArtistForm handleSubmit={executeQuery} />
      {Object.keys(artists).map((artist) => (
        <ArtistCard
          artist={artists[artist]}
          handleClick={() => {
            setSelectedArtist(artists[artist]);
            handleShowModal();
          }}
        />
      ))}
    </Container>
  );
};
