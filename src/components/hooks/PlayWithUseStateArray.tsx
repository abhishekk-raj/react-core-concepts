import {useEffect, useState} from "react";


const PlayWithUseStateArray = () => {
  // State with Array
  const [todos, setTodos] = useState<string[]>([
    'Learn Nest',
    'Learn Next',
    'Learn Previous',
  ]);

  // This code has bug, it will keep rendering since we have added todos as dependency
  // So when todos will change, it will re-render the component
  // And on each re-render it will add Learn Python in list
  // That ends-up with infinite loop
  /*useEffect(() => {
    setTodos([...todos, 'Learn Python']);
  }, [todos]);*/

  useEffect(() => {
    /*
    * Solution-1:
    * Above issue can be solved with this code, but it will ask to aad todo
    * as dependency that will again cause the above issue
    * */
    // setTodos([...todos, 'Learn Python']);


    /*
    * Solution-2:
    * This is another solution for this problem, and it will not ask to
    * add any dependency, but it will add `Learn Python` 2 times
    * But it will only add it 2 times in dev mode since in
    * React 18+, when using <React.StrictMode>, React intentionally calls
    * useEffect twice on mount but only in dev mode not on prod
    * */
    // setTodos((prevState) => [...prevState, 'Learn Python']);


    /*
    * Solution-3:
    * If we don't want to add it twice then we can check for the value
    * And if it already exists then ignore it
    * */
    setTodos((prevState) =>
      prevState.includes('Learn Python') ? prevState : [...prevState, 'Learn Python']
    )
  }, []);

  return (
    <div>
      <h1>Todo List</h1>
      {
        todos.map((todo) => (
          <p>{todo}</p>
        ))
      }
    </div>
  )
}

export default PlayWithUseStateArray;
