import {useState} from "react";

const UseStateLazyInitialization = () => {
  /*
  * Normally, useState(initialValue) evaluates the value on every render.
  * But if you pass a function (useState(() => ...)), React calls it only on the first render.
  * */
  const [todos] = useState(() => {
    const savedTodos = JSON.parse(
      localStorage.getItem('todos') || '[]'
    );
    return savedTodos.length > 0 && savedTodos;
  });

  return (
    <div>
      <h1>Lazy State Initialization</h1>
      {
        todos.map((todo: unknown) => (
          // @ts-ignore
          <p>{todo?.title}</p>
        ))
      }
    </div>
  )
}

export default UseStateLazyInitialization;
