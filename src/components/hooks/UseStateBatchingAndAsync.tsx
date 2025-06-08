import {useState} from "react";


const UseStateBatchingAndAsync = () => {
  const [count, setCount] = useState(0);

  /*
  * This code will not update count by 2 each time button clicked
  * Since state updates in React are asynchronous and batched together
  * to improve performance
  * React batches multiple setState calls into a single update
  * setState is asynchronous - the updated value is not immediately available
  * React waits until the vent loop finishes before updating the DOM. During
  * that time multiple updates are batched
  * */
  // const updateCount = () => {
  //   setCount(count + 1);
  //   setCount(count + 1);
  // }

  /*
  * If we want to achieve this then we need to take the previous state and
  * then update it. It will give desire output
  * */
  const updateCount = () => {
    setCount(prevCount => prevCount + 1);
    setCount(prevCount => prevCount + 1);
  }

  return (
    <div>
      <h1>Counter</h1>
      <button onClick={updateCount} style={{padding: '0.5rem 2rem'}}>{count}</button>
    </div>
  )
}

export default UseStateBatchingAndAsync;
