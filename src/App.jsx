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
// import { useState, useEffect } from "react";
// import TodoForm from "./components/TodoForm";
// import TodoList from "./components/TodoList";

//  function App() {
//   const [todos, setTodos] = useState(() => {
//     const saved = localStorage.getItem("todos");
//     return saved ? JSON.parse(saved) : [];
//   });

//   useEffect(() => {
//     localStorage.setItem("todos", JSON.stringify(todos));
//   }, [todos]);

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

//delete todo
// import { useState, useEffect } from "react";
// import TodoForm from "./components/TodoForm";
// import TodoList from "./components/TodoList";

// function App() {
//   const [todos, setTodos] = useState(() => {
//     const saved = localStorage.getItem("todos");
//     return saved ? JSON.parse(saved) : [];
//   });

//   useEffect(() => {
//     localStorage.setItem("todos", JSON.stringify(todos));
//   }, [todos]);

//   const addTodo = (text) => {
//     setTodos([...todos, { id: Date.now(), text, completed: false }]);
//   };

//   const deleteTodo = (id) => {
//     console.log(id)
//     setTodos(todos.filter((todo) => todo.id !== id));
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
//       <h1 className="text-3xl font-bold mb-6 text-blue-600">Todo App</h1>
//       <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-md">
//         <TodoForm addTodo={addTodo} />
//         <TodoList todos={todos} deleteTodo={deleteTodo} />
//       </div>
//     </div>
//   );
// }

// export default App;


//using modal to delete
// import { useState, useEffect } from "react";
// import TodoForm from "./components/TodoForm";
// import TodoList from "./components/TodoList";
// import DeleteModal from "./components/DeleteModal";

// function App() {
//   const [todos, setTodos] = useState(() => {
//     const saved = localStorage.getItem("todos");
//     return saved ? JSON.parse(saved) : [];
//   });

//   const [showModal, setShowModal] = useState(false);
//   const [todoToDelete, setTodoToDelete] = useState(null);

//   useEffect(() => {
//     localStorage.setItem("todos", JSON.stringify(todos));
//   }, [todos]);

//   const addTodo = (text) => {
//     setTodos([...todos, { id: Date.now(), text, completed: false }]);
//   };

//   // trash clicked → open modal
//   const handleDeleteClick = (id) => {
//     setTodoToDelete(id);
//     setShowModal(true);
//   };

//   // Confirm delete
//   const confirmDelete = () => {
//     setTodos(todos.filter((todo) => todo.id !== todoToDelete));
//     setTodoToDelete(null);
//     setShowModal(false);
//   };

//   // Cancel delete
//   const cancelDelete = () => {
//     setTodoToDelete(null);
//     setShowModal(false);
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
//       <h1 className="text-3xl font-bold mb-6 text-blue-600">Todo App</h1>
//       <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-md">
//         <TodoForm addTodo={addTodo} />
//         <TodoList todos={todos} deleteTodo={handleDeleteClick} />
//       </div>

//       {showModal && (
//         <DeleteModal onConfirm={confirmDelete} onCancel={cancelDelete} />
//       )}
//     </div>
//   );
// }

// export default App;

//edit
import { useState, useEffect } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import DeleteModal from "./components/DeleteModal";
import EditModal from "./components/EditModal";

function App() {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [todoToDelete, setTodoToDelete] = useState(null);
  const [todoToEdit, setTodoToEdit] = useState(null);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  };

  // ==== DELETE LOGIC ====
  const handleDeleteClick = (id) => {
    setTodoToDelete(id);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    setTodos(todos.filter((todo) => todo.id !== todoToDelete));
    setTodoToDelete(null);
    setShowDeleteModal(false);
  };

  const cancelDelete = () => {
    setTodoToDelete(null);
    setShowDeleteModal(false);
  };

  // ==== EDIT LOGIC ====
  const handleEditClick = (todo) => {
    setTodoToEdit(todo);
    setShowEditModal(true);
  };

  const confirmEdit = (newText) => {
    setTodos(
      todos.map((todo) =>
        todo.id === todoToEdit.id ? { ...todo, text: newText } : todo
      )
    );
    setTodoToEdit(null);
    setShowEditModal(false);
  };

  const cancelEdit = () => {
    setTodoToEdit(null);
    setShowEditModal(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-6 text-blue-600">Todo App</h1>
      <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-md">
        <TodoForm addTodo={addTodo} />
        <TodoList todos={todos} deleteTodo={handleDeleteClick} editTodo={handleEditClick} />
      </div>

      {/* Delete Modal */}
      {showDeleteModal && (
        <DeleteModal onConfirm={confirmDelete} onCancel={cancelDelete} />
      )}

      {/* Edit Modal */}
      {showEditModal && (
        <EditModal
          currentText={todoToEdit.text}
          onConfirm={confirmEdit}
          onCancel={cancelEdit}
        />
      )}
    </div>
  );
}

export default App;


