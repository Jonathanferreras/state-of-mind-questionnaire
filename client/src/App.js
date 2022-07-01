import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

import "./App.css";

function App() {
  const [state, setState] = useState({
    name: "",
    dob: "",
    happiness: 0,
    energy: 0,
    hope: 0,
    hoursOfSleep: 0,
  });

  function handleSubmit(e) {
    e.preventDefault();

    fetch("/api/questionnaire", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...state,
        submissionDate: new Date(),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }

  function handleOnChange(e) {
    setState({ ...state, [e.target.name]: e.target.value });
  }

  return (
    <div className="App">
      <h1>State of Mind Questionnaire</h1>
      <hr />
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Enter your full name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={state.name}
            onChange={handleOnChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formDob">
          <Form.Label>Enter your date of birth</Form.Label>
          <Form.Control
            type="date"
            name="dob"
            value={state.dob}
            onChange={handleOnChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formHappy">
          <Row>
            <Form.Label>On a scale of 1 - 5, how happy do you feel?</Form.Label>
          </Row>
          <Form.Check
            inline
            label="1"
            type="radio"
            name="happiness"
            value={1}
            onChange={handleOnChange}
          />
          <Form.Check
            inline
            label="2"
            type="radio"
            name="happiness"
            value={2}
            onChange={handleOnChange}
          />
          <Form.Check
            inline
            label="3"
            type="radio"
            name="happiness"
            value={3}
            onChange={handleOnChange}
          />
          <Form.Check
            inline
            label="4"
            type="radio"
            name="happiness"
            value={4}
            onChange={handleOnChange}
          />
          <Form.Check
            inline
            label="5"
            type="radio"
            name="happiness"
            value={5}
            onChange={handleOnChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formEnergy">
          <Row>
            <Form.Label>
              On a scale of 1 - 5, how energetic do you feel?
            </Form.Label>
          </Row>
          <Form.Check
            inline
            label="1"
            type="radio"
            name="energy"
            value={1}
            onChange={handleOnChange}
          />
          <Form.Check
            inline
            label="2"
            type="radio"
            name="energy"
            value={2}
            onChange={handleOnChange}
          />
          <Form.Check
            inline
            label="3"
            type="radio"
            name="energy"
            value={3}
            onChange={handleOnChange}
          />
          <Form.Check
            inline
            label="4"
            type="radio"
            name="energy"
            value={4}
            onChange={handleOnChange}
          />
          <Form.Check
            inline
            label="5"
            type="radio"
            name="energy"
            value={5}
            onChange={handleOnChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formHope">
          <Row>
            <Form.Label>
              On a scale of 1 - 5, how hopeful do you feel about the future?
            </Form.Label>
          </Row>
          <Form.Check
            inline
            label="1"
            type="radio"
            name="hope"
            value={1}
            onChange={handleOnChange}
          />
          <Form.Check
            inline
            label="2"
            type="radio"
            name="hope"
            value={2}
            onChange={handleOnChange}
          />
          <Form.Check
            inline
            label="3"
            type="radio"
            name="hope"
            value={3}
            onChange={handleOnChange}
          />
          <Form.Check
            inline
            label="4"
            type="radio"
            name="hope"
            value={4}
            onChange={handleOnChange}
          />
          <Form.Check
            inline
            label="5"
            type="radio"
            name="hope"
            value={5}
            onChange={handleOnChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formSleep">
          <Form.Label>How many hours have you slept last night?</Form.Label>
          <Form.Control
            type="number"
            name="hoursOfSleep"
            value={state.hoursOfSleep}
            onChange={handleOnChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default App;
