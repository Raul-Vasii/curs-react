import { useState } from "react";

export function useLocaleStorage(key, defaultValue) {
  function getDefaultValue() {
    const localValue = localStorage.getItem(key);

    if (localValue !== null) {
      return localValue;
    }

    return defaultValue;
  }

  const [value, setValue] = useState(getDefaultValue);

  function setLocalStorageValue(updatedValue) {
    setValue(updatedValue);
    localStorage.setItem(key, updatedValue);
  }

  return [value, setLocalStorageValue];
}
