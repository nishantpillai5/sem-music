import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Outlet } from "react-router-dom";
import { StoreContext } from "src/store/Store";

export const Layout = () => {
  const { storeState } = React.useContext(StoreContext);

  return (
    <div>
      <Navbar className="sticky-top" bg="dark" variant="dark" expand="sm">
        <Container>
          <Navbar.Brand href="/">
            {storeState.loading && "Loading - "}
            Semantic Music Search
          </Navbar.Brand>
          <div>
            <Nav className="d-sm-flex d-none me-auto fs-5">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/artist">Artists</Nav.Link>
              {/* <Nav.Link href="/album">Albums</Nav.Link> */}
              {/* <Nav.Link href="/song">Songs</Nav.Link> */}
            </Nav>
          </div>
        </Container>
      </Navbar>
      <Outlet />
    </div>
  );
};
