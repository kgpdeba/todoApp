// import { useState } from "react";

// function App() {
//   const [todos, setTodos] = useState([]);
//   const [value, setValue] = useState("");

//   const addTodo = (e) => {
//     e.preventDefault();
//     if (!value.trim()) {
//       setValue("");
//       return;
//     }
//     setTodos([...todos, { id: Date.now(), text: value, completed: false }]);
//     setValue("");
//   };

//   return (
//     <div>
//       <h1>Todo App</h1>

//       {/* Form */}
//       <form onSubmit={addTodo}>
//         <input
//           value={value}
//           onChange={(e) => setValue(e.target.value)}
//           placeholder="Add a todo"
//         />
//         <button type="submit">Add</button>
//       </form>

//       {/* List */}
//       <ul>
//         {(() => {
//           let items = [];
//           for (let i = 0; i < todos.length; i++) {
//             items.push(<li key={todos[i].id}>{todos[i].text}</li>);
//           }
//           return items;
//         })()}
//       </ul>
//     </div>
//   );
// }

// export default App;




//using map
// import { useState } from "react";

// function App() {
//   const [todos, setTodos] = useState([]);
//   const [value, setValue] = useState("");

//   const addTodo = (e) => {
//     e.preventDefault();
//     if (!value.trim()) {
//       setValue("");
//       return;
//     }
//     setTodos([...todos, { id: Date.now(), text: value, completed: false }]);
//     setValue("");
//   };

//   return (
//     <div>
//       <h1>Todo App</h1>

//       {/* Form */}
//       <form onSubmit={addTodo}>
//         <input
//           value={value}
//           onChange={(e) => setValue(e.target.value)}
//           placeholder="Add a todo"
//         />
//         <button type="submit">Add</button>
//       </form>

//       {/* List */}
//       <ul>
//         {todos.map((item) => (
//           <li key={item.id}>{item.text}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;




//seperate files
// import { useState } from "react";
// import TodoForm from "./components/TodoForm";
// import TodoList from "./components/TodoList";

// function App() {
//   const [todos, setTodos] = useState([]);

//   const addTodo = (text) => {
//     setTodos([...todos, { id: Date.now(), text, completed: false }]);
//   };

//   return (
//     <div>
//       <h1>Todo App</h1>
//       <TodoForm addTodo={addTodo} />
//       <TodoList todos={todos} />
//     </div>
//   );
// }

// export default App









//localStorage
import { useState, useEffect } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

 function App() {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });

  //  const [todos, setTodos] = useState([])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  };

  return (
    <div>
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} />
    </div>
  );
}

export default App
