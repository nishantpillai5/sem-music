import React from "react";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/esm/Card";
import Container from "react-bootstrap/esm/Container";

export function HomePage() {
  return (
    <Container>
      <Card body>Made by Nishant Pillai and Miranda Bampa</Card>
      <Button onClick={async () => console.log("Test")}>Test</Button>
    </Container>
  );
}
