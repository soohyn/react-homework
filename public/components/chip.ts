import React from "../lib/react.js";

interface ChipProps {
  label: string;
  active: boolean;
}

function Chip({ label, active = false }: ChipProps) {
  const classNames = `chip ${active ? "chip--active" : ""}`;
  return React.createElement("span", { className: classNames }, label);
}

export default Chip;
