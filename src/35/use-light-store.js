import { create } from "zustand";
// v1
[].map(() => {
  const dist = { nume: "test" };

  return dist;
});

// v2
[].map(() => ({ name: "test" }));

// 1. (() => {console.log()}) || Se asteapta sa fie cod in acolade iar ulterior un return
// 2. (() => ({}))  || Sunt o finctie care returneaza obiect fara sa aiba cod

export const useLightStore = create((set) => ({
  isOpen: false,
  toggle: () => set((state) => ({ isOpen: !state.isOpen})),
}));

/*

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
} */
