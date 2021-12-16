import React from "react";
import Card from "react-bootstrap/esm/Card";
import Container from "react-bootstrap/esm/Container";

export function HomePage() {
  return (
    <Container className="container">
      <Card body className="pt-40 mt-40">
        Made by Nishant Pillai and Miranda Bampa
      </Card>
    </Container>
  );
}
