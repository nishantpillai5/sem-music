import React from "react";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/esm/Card";
import Container from "react-bootstrap/esm/Container";
import { call_api, get_artist_info } from "../api/api";

export function HomePage() {
  const [something, setSomething] = React.useState<string[]>([]);

  return (
    <Container>
      <Card body>Made by Nishant Pillai and Miranda Bampa</Card>
      {something.map((one) => {
        return (
          <Card key={one} body>
            {one}
          </Card>
        );
      })}
      <Button
        onClick={async () =>
          console.log(
            await get_artist_info("f59c5520-5f46-4d2c-b2c4-822eabf53419")
          )
        }
      >
        get linkin
      </Button>
    </Container>
  );
}
