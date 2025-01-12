import React from "../lib/react.js";
import Chip from "./chip.ts";
import Toggle from "./toggle.ts";

function App() {
  return React.createElement(
    "div",
    { role: "group" },
    React.createElement(Chip, { label: "공개 예정", active: true }),
  );
}

export default App;
