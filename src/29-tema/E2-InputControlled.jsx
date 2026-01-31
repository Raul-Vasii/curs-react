import { useState } from "react";

export function LiveInput() {
  const [text, setText] = useState("");

  function handleChange(event) {
    setText(event.target.value);
    console.log("Userul scrie:", event.target.value);
    
  }

  return (
    <div>
      <input type="text" value={text} onChange={handleChange} />
      <p>Ai scris: {text}</p>
      <hr />
    </div>
  );
}
