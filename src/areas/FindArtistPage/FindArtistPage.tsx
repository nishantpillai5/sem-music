import React from "react";
import Container from "react-bootstrap/esm/Container";
import {
  ArtistFormType,
  ArtistType,
  FetchDictionary,
  FetchType,
} from "src/utils/types";
import { ArtistCard } from "./components/ArtistCard";
import { ArtistModal } from "./components/ArtistModal";
import { ArtistForm } from "./components/ArtistForm";
import { getArtists } from "src/api/dbpedia";

export const FindArtistPage = () => {
  const [artists, setArtists] = React.useState<FetchDictionary>({});

  const [showModal, setShowModal] = React.useState(false);
  const [selectedArtist, setSelectedArtist] = React.useState<string | null>(
    null
  );

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  const executeQuery = async (form: ArtistFormType) => {
    //call api to fill cards
    // const query = artistQueryBuilder(form);
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
          artist={artist}
          handleClick={() => {
            setSelectedArtist(artist);
            handleShowModal();
          }}
        />
      ))}
    </Container>
  );
};
