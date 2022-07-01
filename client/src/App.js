import { useState } from "react";
import "./App.css";
import { Questionnaire } from "./components/Questionnaire";
import { Results } from "./components/Results";

function App() {
  const [state, setState] = useState({
    stage: 1,
    results: null,
  });

  function handleResults(results) {
    setState({ ...state, stage: 2, results });
  }

  function handleReturn() {
    setState({ ...state, stage: 1, results: null });
  }

  function renderComponent() {
    const { stage, results } = state;

    switch (stage) {
      case 1:
        return <Questionnaire onResults={handleResults} />;
      case 2:
        return <Results onReturn={handleReturn} data={results} />;
      default:
        break;
    }
  }

  return (
    <div className="App">
      <div className="App-container">{renderComponent()}</div>
    </div>
  );
}

export default App;
