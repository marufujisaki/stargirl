import { useEffect, useState } from "react";
import "./App.css";
import Home from "./components/Home";
import Header from "./components/header/Header";
import { Item } from "./data/items";
import ItemComponent from "./components/items/Items";

const App = () => {
  const [home, setHome] = useState<boolean>(true);
  const [selected, setSelected] = useState<Item>();

  const handleDataFromChild = (data: boolean) => {
    setHome(data);
  };

  const handleProduct = (data: Item) => {
    setSelected(data);
    setHome(false);
  };

  useEffect(() => {
    document.title = "Stargirl";
  });

  return (
    <>
      <Header home={home} sendData={handleDataFromChild} />
      {home ? (
        <Home selectProduct={handleProduct} />
      ) : (
        <ItemComponent mini={false} data={selected!} />
      )}
    </>
  );
};

export default App;
