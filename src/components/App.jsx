import React from "react";
import styled from "styled-components";
import Button from "./Button";

function App() {
  return (
    <div className="App" style={{ textAlign: "center" }}>
      <h2>Dev Challenges Button Component</h2>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "36px",
          alignItems: "center",
        }}
      >
        <Div>
          <p>{"<Button />"}</p>
          <Button>Default</Button>
        </Div>
        <Div>
          <p>{'<Button variant="outline" />'}</p>
          <Button variant="outline">Outline</Button>
        </Div>
        <Div>
          <p>{'<Button variant="text" />'}</p>
          <Button variant="text">Text</Button>
        </Div>
        <Div>
          <p>{'<Button disableShadow color="primary" />'}</p>
          <Button disableShadow color="primary">
            Default
          </Button>
        </Div>
        <Div>
          <p>{"<Button disabled />"}</p>
          <Button disabled>Disabled</Button>
        </Div>

        <Row>
          <Div>
            <p>
              {'<Button startIcon="local_grocery_store" color="primary" />'}
            </p>
            <Button startIcon="local_grocery_store" color="primary">
              Default
            </Button>
          </Div>
          <Div>
            <p>{'<Button endIcon="local_grocery_store" color="primary" />'}</p>
            <Button endIcon="local_grocery_store" color="primary">
              Default
            </Button>
          </Div>
        </Row>
        <Row>
          <Div>
            <p>{'<Button startIcon="arrow_left" />'}</p>
            <Button startIcon="arrow_left">Default</Button>
          </Div>
          <Div>
            <p>{'<Button endIcon="arrow_right" />'}</p>
            <Button endIcon="arrow_right">Default</Button>
          </Div>
        </Row>

        <Row>
          <Div>
            <p>{'<Button size="sm" color="primary" />'}</p>
            <Button size="sm" color="primary">
              Default
            </Button>
          </Div>
          <Div>
            <p>{'<Button size="md" color="primary" />'}</p>
            <Button size="md" color="primary">
              Default
            </Button>
          </Div>
          <Div>
            <p>{'<Button size="lg" color="primary" />'}</p>
            <Button size="lg" color="primary">
              Default
            </Button>
          </Div>
        </Row>

        <Row>
          <Div>
            <p>{'<Button color="default" />'}</p>
            <Button color="default">Default</Button>
          </Div>
          <Div>
            <p>{'<Button color="primary" />'}</p>
            <Button color="primary">Default</Button>
          </Div>
          <Div>
            <p>{'<Button color="secondary" />'}</p>
            <Button color="secondary">Default</Button>
          </Div>
          <Div>
            <p>{'<Button color="danger" />'}</p>
            <Button color="danger">Default</Button>
          </Div>
        </Row>
      </div>
      <div style={{ marginTop: 36 }}>
        Made by{" "}
        <a
          href="https://github.com/K-Kelvin"
          target="_blank"
          rel="noopener noreferrer"
        >
          Kijanda
        </a>
      </div>
    </div>
  );
}

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;

  p {
    font-family: "Ubuntu Mono", sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 12px;
    letter-spacing: 0em;
    color: #333333;
    margin: 0;
  }
`;
const Row = styled.div`
  display: flex;
  gap: 36px;
  align-items: center;
`;
export default App;
