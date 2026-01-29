import { useState } from "react";

// !IMPORTANT - tot ce incepe cu useNumeleFunctiei este numit hook in react

export function State() {
  // const [primul, alDoilea, alTreilea] = [0, 1, 2, 3];

  // console.log(primul, alDoilea, alTreilea);

  // Varianta 1
  let value1 = 0;

  function setValue1(val) {
    value1 = val;
  }

  // Varianta 2
  const [value, setValue] = useState(0);

  function handleClick() {
    // let currentValue =
    setValue(value + 1);
  }

  console.log(value, "value");

  return (
    <div>
      <hr />
      <button onClick={handleClick}>Clicked: {value}</button>
    </div>
  );
}
