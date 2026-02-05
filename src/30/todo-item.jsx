export function TodoItem({ todo, onCompleted, onDelete }) {
  return (
    <li className="todo-item">
      <div>
        <input
          checked={todo.completed}
          type="checkbox"
          onChange={() => onCompleted(todo.id)}
        />
        <span className={todo.completed ? "text-done" : ""}>
          {todo.title}
        </span>
      </div>

      <button className="delete-btn" onClick={() => onDelete(todo.id)}>
        Sterge
      </button>
    </li>
  );
}
