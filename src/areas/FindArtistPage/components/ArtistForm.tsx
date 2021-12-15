import React from "react";
import Col from "react-bootstrap/esm/Col";
import Dropdown from "react-bootstrap/esm/Dropdown";
import Form from "react-bootstrap/esm/Form";
import Row from "react-bootstrap/esm/Row";
import Button from "react-bootstrap/esm/Button";
import { CustomDrop } from "src/shared/CustomDrop";

type ArtistFormProps = {
  handleSubmit: () => void;
};

export const ArtistForm = ({ handleSubmit }: ArtistFormProps) => {
  const [location, setLocation] = React.useState("Select Location");
  const [genre, setGenre] = React.useState("Select Genre");
  const [type, setType] = React.useState("Select Type");

  React.useEffect(() => {
    //fetch from API
    // get genre, getlocation from api
    // return () => {
    //   cleanup
    // }
  }, []);

  return (
    <Form>
      <Form.Group controlId="formName">
        <Row className="g-2">
          <Col sm={2}>
            <Form.Check label="Type" name="type" type="switch" id="type" />
          </Col>
          <Col sm={2}>
            <Dropdown
              onSelect={(e) => {
                if (e) {
                  setType(e);
                }
              }}
            >
              <Dropdown.Toggle id="dropdown-type">
                {type.toString()}
              </Dropdown.Toggle>
              <Dropdown.Menu as={CustomDrop}>
                <Dropdown.Item eventKey="Solo">Solo</Dropdown.Item>
                <Dropdown.Item eventKey="Band">Band</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>

        <Row className="g-2">
          <Col sm={2}>
            <Form.Check label="Genre" name="genre" type="switch" id="genre" />
          </Col>
          <Col sm={2}>
            <Dropdown
              onSelect={(e) => {
                if (e) {
                  setGenre(e);
                }
              }}
            >
              <Dropdown.Toggle id="dropdown-genre">
                {genre.toString()}
              </Dropdown.Toggle>
              <Dropdown.Menu as={CustomDrop}>
                <Dropdown.Item eventKey="Jazz">Jazz</Dropdown.Item>
                <Dropdown.Item eventKey="Metal">Metal</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>

        <Row className="g-2">
          <Col sm={2}>
            <Form.Check
              label="Location"
              name="location"
              type="switch"
              id="location"
            />
          </Col>
          <Col sm={2}>
            <Dropdown
              onSelect={(e) => {
                if (e) {
                  setLocation(e);
                }
              }}
            >
              <Dropdown.Toggle id="dropdown-autoclose-true">
                {location.toString()}
              </Dropdown.Toggle>
              <Dropdown.Menu as={CustomDrop}>
                <Dropdown.Item eventKey="NewYork">New York</Dropdown.Item>
                <Dropdown.Item eventKey="StockHolm">Stockholm</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>
        <Row className="g-2">
          <Col sm={2}>
            <Form.Check label="Year" name="year" type="switch" id="year" />
          </Col>
          <Col sm={10}>
            <Form.Range />
          </Col>
        </Row>
        <Row className="g-2">
          <Col sm={2}></Col>
          <Col sm={10}></Col>
        </Row>
      </Form.Group>
      <Button variant="primary" onClick={handleSubmit}>
        Find
      </Button>
    </Form>
  );
};
