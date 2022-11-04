import "./App.css";
import { useState } from "react";

import Search from "./components/Search";
import Line from "./components/Line";

import data from "./data/emojies.json";

function App() {
  const [txtSearch, setTxtSearch] = useState("");

  return (
    <div className="App">
      <Search txtSearch={txtSearch} setTxtSearch={setTxtSearch} />
      {data.map((item) => {
        if (item.keywords.includes(txtSearch)) {
          return <Line emoji={{ title: item.title, symbol: item.symbol }} />;
        } else {
          return;
        }
      })}
    </div>
  );
}

export default App;
