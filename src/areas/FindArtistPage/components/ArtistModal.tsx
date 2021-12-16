import React from "react";
import Button from "react-bootstrap/esm/Button";

import Modal from "react-bootstrap/esm/Modal";

type ArtistModalProps = {
  artist: string | null;
  showModal: boolean;
  handleCloseModal: () => void;
};

export const ArtistModal = ({
  artist,
  showModal,
  handleCloseModal,
}: ArtistModalProps) => {
  React.useEffect(() => {
    //fetch from API
    // return () => {
    //   cleanup
    // }
  }, [artist]);

  return (
    <Modal show={artist && showModal} onHide={handleCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseModal}>
          Close
        </Button>
        <Button variant="primary" onClick={handleCloseModal}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
