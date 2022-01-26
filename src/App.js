import "./App.css";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/navBar/navBar";
import Navigator from "./routes";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Navigator />
      </BrowserRouter>
    </div>
  );
}

export default App;
