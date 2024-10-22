import { useState } from 'react';
import { useGetTodoByIdQuery, useGetTodosQuery } from './store/api';

export const TodoApp = () => {
  // const { data: todos = [], isLoading } = useGetTodosQuery();
  const [todoId, setTodoId] = useState(1);
  const { data: todo, isLoading } = useGetTodoByIdQuery(todoId);

  const nextTodo = () => {
    setTodoId(todoId + 1);
  };

  const prevTodo = () => {
    setTodoId(todoId - 1);
  };
  return (
    <>
      <h1>Todo - RTK</h1>
      <hr />

      <h4>isLoading: {isLoading ? 'True' : 'False'}</h4>

      <pre>{JSON.stringify(todo)}</pre>

      <button onClick={prevTodo}>Prev Todo</button>
      <button onClick={nextTodo}>Next Todo</button>

      {/* <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <strong>{todo.completed ? 'DONE' : 'Pending'}</strong>
            {todo.title}
          </li>
        ))}
      </ul> */}
    </>
  );
};
