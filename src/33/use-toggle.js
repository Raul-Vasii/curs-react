// const [active, toggle] = useToggle(false);
// toggle() -> active false -> true
// toggle() -> active true -> false

import { useState } from "react";

export function useToggle(initialValue) {
  const [value, setValue] = useState(initialValue);

  function toggleValue() {
    setValue(!value);
  }

  return [value, toggleValue];
}
