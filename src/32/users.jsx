// import "./users.css"
import { useLocaleStorage } from "../33/use-locale-storage";
import styles from "./users.module.css";

export function Users() {
  const [inputValue, setInputValue] = useLocaleStorage("inputValue", "");

  function onChange(event) {
    setInputValue(event.target.value);
  }

  return (
    <div className="todo-container">
      <h1 className={styles.todoTitle}>Componenta Users</h1>
      <input
        value={inputValue}
        type="text"
        className={styles.input}
        onChange={onChange}
      />
    </div>
  );
}
