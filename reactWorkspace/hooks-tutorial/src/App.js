import React from "react";
import Counter from "./Components/Counter";
import Info from "./Components/Info";
import Average from "./Components/Average";
import FormHandler from "./Components/FormHandler";

const App = () => {
  return (
    <div>
      <Average />
      <hr />
      <Counter />
      <hr />
      <Info />
      <hr></hr>
      <FormHandler />
    </div>
  );
};

export default App;
