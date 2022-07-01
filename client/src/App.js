import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Enter your full name</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Enter your date of birth (mm/dd/yyyy)</Form.Label>
          <Form.Control type="date" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Row>
            <Form.Label>On a scale of 1 - 5, how happy do you feel?</Form.Label>
          </Row>
          <Form.Check inline label="1" type="radio" id={`inline-radio-1`} />
          <Form.Check inline label="2" type="radio" id={`inline-radio-2`} />
          <Form.Check inline label="3" type="radio" id={`inline-radio-3`} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Row>
            <Form.Label>
              On a scale of 1 - 5, how energetic do you feel?
            </Form.Label>
          </Row>
          <Form.Check inline label="1" type="radio" id={`inline-radio-1`} />
          <Form.Check inline label="2" type="radio" id={`inline-radio-2`} />
          <Form.Check inline label="3" type="radio" id={`inline-radio-3`} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Row>
            <Form.Label>
              On a scale of 1 - 5, how hopeful do you feel about the future?
            </Form.Label>
          </Row>
          <Form.Check inline label="1" type="radio" id={`inline-radio-1`} />
          <Form.Check inline label="2" type="radio" id={`inline-radio-2`} />
          <Form.Check inline label="3" type="radio" id={`inline-radio-3`} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>How many hours have you slept last night?</Form.Label>
          <Form.Control type="number" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default App;
