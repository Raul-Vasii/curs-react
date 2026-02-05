import "./todos.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { TodoAdd } from "./todo-add.jsx";
import { TodoList } from "./todo-list.jsx";
// Sa nu ajungeti sa aveti un array, combinat din numere, obiecte si stringuri
const array = ["De cumparat paine", "De facut temele", "De cumparat lapte"];

// Map -> ne permite sa iteram fiecare element din array si sa il modificam
// 1. NU modifica array-ul initial
// 2. De fiecare data returneaza un array nou

async function fetchTodos() {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos",
    );
    return response.data;
  } catch {
    console.log("eroare");
  }
}

export function Todos() {
  // Pana la return, tinem tot JS-ul
  // Dupa return unde avem HTML + JS
  const str = "buna".toLowerCase();
  const num = 123;
  const obj = { nume: "test" };

  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  // console.log(todos, "modificat");

  useEffect(() => {
    // console.log("buna ziua");
    // Tema 30: Liniile 25-31 si 36
    const saved = localStorage.getItem("todos");
    if (saved) {
      try {
        setTodos(JSON.parse(saved));
      } catch {}
    }
  }, []);

useEffect(() => {
  fetchTodos()
}, []);


  useEffect(() => {
    // console.log("todos a fost modificat", todos);
    localStorage.setItem("todos", JSON.stringify(todos)); // Tema 30
  }, [todos]);

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  //   console.log(inputValue, "inputValue");

  function handleAdd() {
    const newTodo = {
      title: inputValue,
      completed: false,
      id: Date.now(),
    };

    // 1. Varianta incorecta
    // todos.push(newTodo)

    // Varianta corecta
    setTodos(todos.concat(newTodo));
    setInputValue("");
    // console.log(newTodo)
  }

  function handleDelete(id) {
    const updated = todos.filter((todo) => todo.id !== id);
    setTodos(updated);
  }
  function handleCompleted(id) {
    const updated = todos.map((todo) => {
      if (todo.id === id) todo.completed = !todo.completed;
      return todo;
    });
    setTodos(updated);
  }

  // nu va limitati la un singur return de html in componenta
  // if(todos.length === 0) {
  //     return <p>Hey nu ai nimic de facut</p>
  // }
  return (
    <div className="w-xl my-10 mx-auto  p-5 border-2 border-black bg-white">
      <h1>Todo List</h1>
      <TodoAdd
        inputValue={inputValue}
        onInputChange={handleInputChange}
        onAdd={handleAdd}
      />

      {todos.length === 0 && <p>Hey nu ai nimic de facut</p>}

      {/* cand avem un array de mapat in JSX
      1. Todo List
      2. TodoItem
      3. TodoList este folosit gen <TodoList list={}
      4. TodoItem este folosit gen <TodoItem Item={} */}
      <TodoList
        list={todos}
        onCompleted={handleCompleted}
        onDelete={handleDelete}
      />
      
    </div>
  );
}
