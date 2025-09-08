// function TodoList({ todos }) {
//   return (
//     <ul>
//       {todos.map((todo) => (
//         <li key={todo.id}>{todo.text}</li>
//       ))}
//     </ul>
//   );
// }

// export default TodoList;


// import { FaTrash } from "react-icons/fa";

// function TodoList({ todos, deleteTodo }) {
//   return (
//     <ul className="mt-4 space-y-3">
//       {todos.map((todo) => (
//         <li
//           key={todo.id}
//           className="flex justify-between items-center p-3 bg-gray-50 border rounded-lg shadow-sm gap-5 w-[400px]"
//         >
//           <span className="w-[350px]">{todo.text}</span>
//           <button
//             onClick={() => deleteTodo(todo.id)}
//             className="text-red-500 hover:text-red-700 transition cursor-pointer"
//           >
//             <FaTrash />
//           </button>
//         </li>
//       ))}
//     </ul>
//   );
// }

// export default TodoList;


import { FaTrash, FaEdit } from "react-icons/fa";

function TodoList({ todos, deleteTodo, editTodo }) {
  return (
    <ul className="mt-4 space-y-3">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="flex justify-between items-center p-3 bg-gray-50 border rounded-lg shadow-sm gap-5 w-[400px]"
        >
          <span className="flex-1">{todo.text}</span>
          <div className="flex gap-3">
            <button
              onClick={() => editTodo(todo)}
              className="text-blue-500 hover:text-blue-700 transition cursor-pointer"
            >
              <FaEdit />
            </button>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="text-red-500 hover:text-red-700 transition cursor-pointer"
            >
              <FaTrash />
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;

