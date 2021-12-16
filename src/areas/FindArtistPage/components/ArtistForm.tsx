import React from "react";
import Col from "react-bootstrap/esm/Col";
import Dropdown from "react-bootstrap/esm/Dropdown";
import Form from "react-bootstrap/esm/Form";
import Row from "react-bootstrap/esm/Row";
import Button from "react-bootstrap/esm/Button";
import { CustomDrop } from "src/shared/CustomDrop";
import { ArtistFormType } from "src/utils/types";
import { StoreContext } from "src/store/Store";

type ArtistFormProps = {
  handleSubmit: (form: ArtistFormType) => void;
};

const initialState: ArtistFormType = {
  type: "",
  typeEnabled: false,
  instrument: "",
  instrumentEnabled: false,
  genre: "",
  genreEnabled: false,
  year: "",
  yearEnabled: false,
};

export const ArtistForm = ({ handleSubmit }: ArtistFormProps) => {
  const [form, setForm] = React.useState(initialState);

  const { storeState, dispatch } = React.useContext(StoreContext);

  const handleOnChange = (e: any) => {
    const { name, checked } = e.target;
    setForm({ ...form, [name]: checked });
  };

  const handleTextOnChange = (e: any) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  React.useEffect(() => {}, [form]);

  return (
    <Form>
      <Form.Group>
        <Row className="g-2">
          <Col sm={2}>
            <Form.Check
              label="Type"
              name="typeEnabled"
              type="switch"
              id="typeEnabled"
              checked={form.typeEnabled}
              onChange={handleOnChange}
            />
          </Col>
          <Col sm={2}>
            <Dropdown
              onSelect={(e) => {
                if (e) {
                  const newForm = { ...form };
                  newForm.type = e;
                  if (!form.typeEnabled) {
                    newForm.typeEnabled = true;
                  }
                  if (e === "Band") {
                    newForm.instrument = "";
                    newForm.instrumentEnabled = false;
                  }
                  setForm(newForm);
                }
              }}
            >
              <Dropdown.Toggle id="dropdown-type">
                {form.type || "Select Type"}
              </Dropdown.Toggle>
              <Dropdown.Menu as={CustomDrop}>
                <Dropdown.Item eventKey="Person">Person</Dropdown.Item>
                <Dropdown.Item eventKey="Band">Band</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col sm={2}>
            <Form.Check
              label="Genre"
              name="genreEnabled"
              type="switch"
              id="genreEnabled"
              checked={form.genreEnabled}
              onChange={handleOnChange}
            />
          </Col>
          <Col sm={2}>
            <Dropdown
              onSelect={(e) => {
                if (e) {
                  const newForm = { ...form };
                  newForm.genre = e;
                  if (!form.genreEnabled) {
                    newForm.genreEnabled = true;
                  }
                  setForm(newForm);
                }
              }}
            >
              <Dropdown.Toggle id="dropdown-genre">
                {form.genre ? storeState.genres[form.genre] : "Select Genre"}
              </Dropdown.Toggle>
              <Dropdown.Menu as={CustomDrop}>
                {Object.keys(storeState.genres).map((key) => (
                  <Dropdown.Item eventKey={key}>
                    {storeState.genres[key]}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col sm={2}>
            <Form.Check
              label="Intrument"
              name="instrumentEnabled"
              type="switch"
              id="instrumentEnabled"
              checked={form.instrumentEnabled}
              onChange={handleOnChange}
            />
          </Col>
          <Col sm={2}>
            <Dropdown
              onSelect={(e) => {
                if (e) {
                  const newForm = { ...form };
                  newForm.instrument = e;
                  if (!form.instrumentEnabled) {
                    newForm.instrumentEnabled = true;
                  }
                  if (form.type === "Band") {
                    newForm.type = "Person";
                    newForm.typeEnabled = true;
                  }
                  setForm(newForm);
                }
              }}
            >
              <Dropdown.Toggle id="dropdown-autoclose-true">
                {form.instrument
                  ? storeState.instruments[form.instrument]
                  : "Select Instrument"}
              </Dropdown.Toggle>
              <Dropdown.Menu as={CustomDrop}>
                {Object.keys(storeState.instruments).map((key) => (
                  <Dropdown.Item eventKey={key}>
                    {storeState.instruments[key]}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col sm={2}>
            <Form.Check
              label="Year"
              name="yearEnabled"
              type="switch"
              id="yearEnabled"
              checked={form.yearEnabled}
              onChange={handleOnChange}
            />
          </Col>
          <Col sm={2}>
            <Form.Control
              name="year"
              type="text"
              id="year"
              value={form.year}
              onChange={handleTextOnChange}
            />
          </Col>
        </Row>
        <Row className="g-2">
          <Col sm={2}></Col>
          <Col sm={10}></Col>
        </Row>
      </Form.Group>
      <Button variant="primary" onClick={() => handleSubmit(form)}>
        Find
      </Button>
    </Form>
  );
};
