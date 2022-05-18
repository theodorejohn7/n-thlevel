import "./App.css";
import React from "react";
import { MenuList } from "./components/MenuList";
import Menu from "./components/Menu";


import Delete from "./components/pages/Delete";
import SelectedListItem from "./components/SelectedListItem";

function App() {
  return (
    <>
     
        {/* <SelectedListItem /> */}
        <div style={{ width: "250px" }}>
          <Menu items={MenuList} />
        </div>
     
    </>
  );
}

export default App;
