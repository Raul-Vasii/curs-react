import { TodoItem } from "./todo-item.jsx";

export function TodoList({ list, onCompleted, onDelete }) {
  return (
    <ul className="todo-list">
      {list.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            onCompleted={onCompleted}
            onDelete={onDelete}
          />
        );
      })}
    </ul>
  );
}
