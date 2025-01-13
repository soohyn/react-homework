import React from "../lib/react.js";

interface ToggleProps {
  status: "on" | "off";
}

function Toggle({ status = "off" }: ToggleProps) {
  const classNames = `toggle toggle--${status}`;

  function onChangeHandler (e:MouseEvent){
    const labelEl = document.querySelector('.toggle')

    if(!labelEl) return;

    labelEl.classList.toggle('toggle--on')
  }

  return React.createElement(
    "label",
    { className: classNames },
    React.createElement("input", { type: "checkbox", id: "toggle__input", onChange:onChangeHandler }),
    React.createElement("div", { className: "toggle__indicator" })
  );
}

export default Toggle;
