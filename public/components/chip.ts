import React from "../lib/react.js";

interface ChipProps {
  label: string;
  active: boolean;
}

function Chip({ label, active = false }: ChipProps) {
  const classNames = `chip ${active ? "chip--active" : ""}`;

  function onClickHandler (){
    const chipEl = document.querySelector('.chip')

    if(!chipEl) return;

    chipEl.classList.toggle('chip--active')
  }

  return React.createElement("button", { className: classNames, onClick: onClickHandler, type:'button' },React.createElement('span',{},label) );
}

export default Chip;
