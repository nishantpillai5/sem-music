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
import { StoreContext } from "src/store/Store";

export const FindArtistPage = () => {
  const [artists, setArtists] = React.useState<
    FetchDictionary<ArtistFetchType>
  >({});

  const { dispatch } = React.useContext(StoreContext);

  const [showModal, setShowModal] = React.useState(false);
  const [selectedArtist, setSelectedArtist] =
    React.useState<ArtistFetchType | null>(null);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  const executeQuery = async (form: ArtistFormType) => {
    dispatch({ type: "set-loading", payload: true });
    const results = await getArtists(form);
    setArtists(results);
    dispatch({ type: "set-loading", payload: false });
  };

  return (
    <Container fluid className="p-0">
      <ArtistModal
        artist={selectedArtist}
        handleCloseModal={() => handleCloseModal()}
        showModal={showModal}
      />
      <div className="container-fluid bg-secondary text-white p-0 float-left">
        <ArtistForm handleSubmit={executeQuery} />
      </div>
      <div className="container-fluid bg-light mt-3">
        {Object.keys(artists).length === 0 ? (
          <h5 className="text-muted text-center rounded-pill">
            Nothing To Display
          </h5>
        ) : null}
        {Object.keys(artists).map((artist) => (
          <ArtistCard
            artist={artists[artist]}
            handleClick={() => {
              setSelectedArtist(artists[artist]);
              handleShowModal();
            }}
          />
        ))}
      </div>
    </Container>
  );
};
