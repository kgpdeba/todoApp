// import { useState } from "react";

// function TodoForm({ addTodo }) {
//   const [value, setValue] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!value.trim()) {
//         setValue("")
//         return;
//     }
//     addTodo(value);
//     setValue("");
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input value={value} onChange={(e) => setValue(e.target.value)} placeholder="Add a todo" />
//       <button type="submit">Add</button>
//     </form>
//   );
// }

// export default TodoForm;



import { useState } from "react";

function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value.trim()) {
      setValue("");
      return;
    }
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Add a todo"
        className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition cursor-pointer"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;

