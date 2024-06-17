import { useEffect, useState } from "react";
import "./App.css";
import Home from "./components/Home";

function App() {
  const [home, setHome] = useState(true);
  useEffect(() => {
    document.title = "Stargirl";
  });
  return <>{home ? <Home/> : <div>item</div>}</>;
}

export default App;
