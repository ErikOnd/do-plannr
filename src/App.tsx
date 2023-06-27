import "./App.css";
import FormComponent from "./components/FormComponent";
import { Container } from "react-bootstrap";
import HintComponent from "./components/HintComponent";

function App() {
  return (
    <div className="App">
      <div className="background" />
      <FormComponent />
      <HintComponent />
    </div>
  );
}

export default App;
