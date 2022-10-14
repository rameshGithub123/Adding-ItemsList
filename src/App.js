import "./styles.css";
import { useState } from "react";

export default function App() {
  const [todoList, setTodoList] = useState([]);
  const [input, setInput] = useState("");

  const addItem = (e) => {
    if (input.length) {
      const item = { id: Math.random(), todo: input, isCompleted: false };
      setTodoList([...todoList, item]);
      setInput("");
    }
  };

  const handleCompleted = (key) => {
    const mapped = todoList.map((item) =>
      item.id === key ? { ...item, isCompleted: !item.isCompleted } : item
    );
    setTodoList(mapped);
    console.log("mapped", mapped);
  };
  return (
    <div className="App">
      <h1>Todo List</h1>
      <input
        type="text"
        placeholder="item"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addItem}>ADD</button>
      <div>
        <ul>
          {todoList.map(({ id, todo, isCompleted }) => (
            <li
              onClick={() => handleCompleted(id)}
              className={isCompleted ? "todo strike" : "todo"}
            >
              {todo}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
