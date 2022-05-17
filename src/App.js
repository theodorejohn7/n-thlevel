import "./App.css";
import React from "react";
import { MenuList } from "./components/MenuList";
import Menu from "./components/Menu";

function App() {
  return (
    <>


      <div style={{ width: "250px" }}>
        <Menu items={MenuList} />
      </div>
    </>
  );
}

export default App;
