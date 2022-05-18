import "./App.css";
import React from "react";
import { MenuList } from "./components/MenuList";
import Menu from "./components/Menu";
import { ThemeContext } from "./components/context/ThemeContext";
import { useState } from "react";

function App() {
  const select = (JSON.parse(localStorage.getItem("id")));
  console.log("select", select);
  const [childIndex, setChildIndex] = useState(select);

  function changeIndex(index) {
    setChildIndex(index);
  }
  return (
    <>
      <ThemeContext.Provider value={{ childIndex, changeIndex }}>
        <div style={{ width: "250px" }}>
          <Menu items={MenuList} />
        </div>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
