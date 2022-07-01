import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
export function Results({ onReturn, data }) {
  return (
    <div className="results">
      <h1>Your Results</h1>
      <br />
      <Row>
        <Col>Happiness today: {data.submission.happiness}</Col>
        <Col>
          Average happiness:{" "}
          {Math.floor(data.averages.personal["AVG(Happiness)"])}
        </Col>
      </Row>
      <Row>
        <Col className="global-average">
          Average happiness with people of the same age:{" "}
          {Math.floor(data.averages.global["AVG(Happiness)"])}
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>Energy level today: {data.submission.energy}</Col>
        <Col>
          Average energy level:{" "}
          {Math.floor(data.averages.personal["AVG(Energy)"])}
        </Col>
      </Row>
      <Row>
        <Col className="global-average">
          Average energy level with people of the same age:{" "}
          {Math.floor(data.averages.global["AVG(Energy)"])}
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>Hopefulness today: {data.submission.hope}</Col>
        <Col>
          Average hopefulness:{" "}
          {Math.floor(data.averages.personal["AVG(Hopefulness)"])}
        </Col>
      </Row>
      <Row>
        <Col className="global-average">
          Average hopefulness with people of the same age:{" "}
          {Math.floor(data.averages.global["AVG(Hopefulness)"])}
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>Hours of sleep today: {data.submission.hoursOfSleep}</Col>
        <Col>
          Average sleeping hours:{" "}
          {Math.floor(data.averages.personal["AVG(HoursSlept)"])}
        </Col>
      </Row>
      <Row>
        <Col className="global-average">
          Average sleeping hours with people of the same age:{" "}
          {Math.floor(data.averages.global["AVG(HoursSlept)"])}
        </Col>
      </Row>
      <br />
      <br />
      <Button onClick={onReturn} variant="success" type="submit">
        Back to Questionnaire
      </Button>
    </div>
  );
}
