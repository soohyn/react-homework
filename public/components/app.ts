import React from "../lib/react.js";
import Chip from "./chip.ts";

function App() {
  return React.createElement("div", { role: "group" }, React.createElement(Chip, { label: "공개 예정", active: true }), React.createElement(Chip, { label: "공개 예정", active: false }));
}

export default App;
