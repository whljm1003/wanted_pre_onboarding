import React from "react";
import Modal from "./components/Modal";
import Toggle from "./components/Toggle";
import Tab from "./components/Tab";
import Tag from "./components/Tag";
import AutoComplete from "./components/AutoComplete";
import ClickToEdit from "./components/ClickToEdit";

function App() {
  return (
    <div>
      <Toggle />
      <Modal />
      <Tab />
      <Tag />
      <AutoComplete />
      <ClickToEdit />
    </div>
  );
}

export default App;
