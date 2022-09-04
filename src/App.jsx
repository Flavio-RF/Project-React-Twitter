import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./components/Router";

function App() {
  return (
    <div className="bg-zinc-600 text-white">
      <div className="">
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
