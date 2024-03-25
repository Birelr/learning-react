import { data } from "autoprefixer";
import React from "react";
import { useEffect, useState } from "react";

const FetchApi = () => {
  const apiUrl = "https://jsonplaceholder.typicode.com/todos";

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setTodos(data.slice(0, 15)));
  }, []);

  return (
    <div className=" pt-20 pb-20">
      <div className=" text-white w-4/5 min-h-96 bg-black m-auto rounded-xl">
        <h1 className=" text-2xl text-center pt-5">Fetch API todos</h1>
        <ul className="pt-4 pl-20">
          {todos.map((todo) => (
            <li key={todo.id} className=" p-2 list-decimal">
              {todo.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FetchApi;
