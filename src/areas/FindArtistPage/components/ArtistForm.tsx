import React from "react";
import Col from "react-bootstrap/esm/Col";
import Dropdown from "react-bootstrap/esm/Dropdown";
import Form from "react-bootstrap/esm/Form";
import Row from "react-bootstrap/esm/Row";
import Button from "react-bootstrap/esm/Button";
import { CustomDrop } from "src/shared/CustomDrop";
import { ArtistFormType } from "src/utils/types";
import { StoreContext } from "src/store/Store";
import Spinner from "react-bootstrap/esm/Spinner";

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
  startYear: "",
  endYear: "",
  yearEnabled: false,
};

export const ArtistForm = ({ handleSubmit }: ArtistFormProps) => {
  const [form, setForm] = React.useState(initialState);

  const { storeState } = React.useContext(StoreContext);

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
        <Row className="pt-2 ps-2 pe-2">
          <Col className="">
            <Form.Check
              className="pt-1"
              label="Type"
              name="typeEnabled"
              type="switch"
              id="typeEnabled"
              checked={form.typeEnabled}
              onChange={handleOnChange}
            />
          </Col>
          <Col>
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
          <Col>
            <Form.Check
              className="pt-1"
              label="Genre"
              name="genreEnabled"
              type="switch"
              id="genreEnabled"
              checked={form.genreEnabled}
              onChange={handleOnChange}
            />
          </Col>
          <Col>
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
                {form.genre
                  ? storeState.genres[form.genre].label.value
                  : "Select Genre"}
              </Dropdown.Toggle>
              <Dropdown.Menu as={CustomDrop}>
                {Object.keys(storeState.genres).map((key) => (
                  <Dropdown.Item eventKey={key}>
                    {storeState.genres[key].label.value}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col>
            <Form.Check
              className="pt-1"
              label="Instrument"
              name="instrumentEnabled"
              type="switch"
              id="instrumentEnabled"
              checked={form.instrumentEnabled}
              onChange={handleOnChange}
            />
          </Col>
          <Col>
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
                  ? storeState.instruments[form.instrument].label.value
                  : "Select Instrument"}
              </Dropdown.Toggle>
              <Dropdown.Menu as={CustomDrop}>
                {Object.keys(storeState.instruments).map((key) => (
                  <Dropdown.Item eventKey={key}>
                    {storeState.instruments[key].label.value}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col>
            <Form.Check
              className="pt-1"
              label="Year"
              name="yearEnabled"
              type="switch"
              id="yearEnabled"
              checked={form.yearEnabled}
              onChange={handleOnChange}
            />
          </Col>
          <Col>
            <Form.Control
              disabled={!form.yearEnabled}
              name="startYear"
              type="text"
              id="startYear"
              value={form.startYear}
              onChange={handleTextOnChange}
            />
          </Col>
          _
          <Col>
            <Form.Control
              disabled={!form.yearEnabled}
              name="endYear"
              type="text"
              id="endYear"
              value={form.endYear}
              onChange={handleTextOnChange}
            />
          </Col>
        </Row>
      </Form.Group>
      <Button
        className="container-fluid m-2"
        disabled={storeState.loading}
        variant={storeState.loading ? "warning" : "primary"}
        onClick={() => handleSubmit(form)}
      >
        {storeState.loading ? (
          <Spinner animation="border" variant="dark" />
        ) : (
          "Find"
        )}
      </Button>
    </Form>
  );
};
