//   const [posts, setPosts] = useState([]);

// const [active, toggle] = useToggle(false);
// toggle() -> active false -> true
// toggle() -> active true -> false

export function useState(initialValue) {
  let value = initialValue;

  function setValue(updatedValue) {
    value = updatedValue;
  }

  return [value, setValue];
}
