import React from "react";
import { Button, Table } from "react-bootstrap";
import Carousel from "react-bootstrap/esm/Carousel";
import Col from "react-bootstrap/esm/Col";
import ListGroup from "react-bootstrap/esm/ListGroup";

import Modal from "react-bootstrap/esm/Modal";
import Row from "react-bootstrap/esm/Row";
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

  const [tableHidden, setTableHidden] = React.useState(true);

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
        <Modal.Title>{artistInfo.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col>
            <ListGroup>
              <ListGroup.Item>Name: {artistInfo.name}</ListGroup.Item>
              <ListGroup.Item>Country: {artistInfo.country}</ListGroup.Item>
              <ListGroup.Item>
                Disambiguation: {artistInfo.disambiguation}
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col sm={7}>
            <h4>Albums</h4>
            <Carousel>
              {artistInfo.releaseGroupList.map((album) => (
                <Carousel.Item key={album.id}>
                  <img
                    className="d-block w-100"
                    src={`http://coverartarchive.org/release-group/${album.id}/front`}
                    alt={album.title}
                  />
                  <Carousel.Caption>
                    <h3>{album.title}</h3>
                    <p>{album["first-release-date"]}</p>
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
            </Carousel>
            <Button
              variant="primary"
              onClick={() => setTableHidden(!tableHidden)}
              className="container-fluid m-1"
            >
              Show Full List
            </Button>
          </Col>
        </Row>
        <Table hidden={tableHidden} striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Release Date</th>
            </tr>
          </thead>
          <tbody>
            {artistInfo.releaseGroupList.map((album, index) => (
              <tr>
                <td>{index}</td>
                <td>{album.title}</td>
                <td>{album["first-release-date"]}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Modal.Body>
    </Modal>
  );
};
