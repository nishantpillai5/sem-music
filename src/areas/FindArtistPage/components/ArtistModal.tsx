import React from "react";
import Button from "react-bootstrap/esm/Button";

import Modal from "react-bootstrap/esm/Modal";
import { getArtistInfo } from "src/api/musicBrainz";
import { ArtistApiType, ArtistFetchType } from "src/utils/types";

type ArtistModalProps = {
  artist: ArtistFetchType | null;
  showModal: boolean;
  handleCloseModal: () => void;
};

export const ArtistModal = ({
  artist,
  showModal,
  handleCloseModal,
}: ArtistModalProps) => {
  const [artistInfo, setArtistInfo] = React.useState<ArtistApiType | null>(
    null
  );

  React.useEffect(() => {
    async function getData() {
      if (artist) {
        setArtistInfo(await getArtistInfo(artist.url.value));
      }
    }
    getData();
  }, [artist]);

  if (artist === null || artistInfo === null) return <></>;

  return (
    <Modal show={showModal} onHide={handleCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>{artistInfo.name}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseModal}>
          Close
        </Button>
        <Button variant="primary" onClick={handleCloseModal}>
          Save Changes
        </Button>
      </Modal.Footer>
      <img src="http://coverartarchive.org/release-group/b5b4bb4b-8ba5-3acf-88cb-4cae2699d8da/front" />
    </Modal>
  );
};
