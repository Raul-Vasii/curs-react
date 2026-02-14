import { useState } from "react";

export function useLocaleStorage(key, defaultValue) {
  function getDefaultValue() {
    const localeValue = localStorage.getItem(key);

    if (!localeValue) return defaultValue;

    try {
      return JSON.parse(localeValue);
    } catch {
      return defaultValue;
    }
  }

  const [value, setValue] = useState(getDefaultValue());

  function setLocaleStorageValue(updatedValue) {
    setValue((prevValue) => {
      const nextValue =
        typeof updatedValue === "function"
          ? updatedValue(prevValue)
          : updatedValue;

      localStorage.setItem(key, JSON.stringify(nextValue));
      return nextValue;
    });
  }

  return [value, setLocaleStorageValue];
}
// const { votes, upVote, downVite } = useSimpleVote(15);
// upVote -> votes = votes + 1
// downVite -> votes = votes - 1 ?? Sa nu fie sub 0
