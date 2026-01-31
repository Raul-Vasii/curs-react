import { useState } from "react";

export function ToggleButton() {
  const [isOn, setIsOn] = useState(false);

  function handleToggle() {
    setIsOn(!isOn);
    console.log("Userul a apasat");
    
  }

  return (
    <div>
      <hr />
      <button onClick={handleToggle}>{isOn ? "ON" : "OFF"}</button>
      <hr />
    </div>
  );
}
