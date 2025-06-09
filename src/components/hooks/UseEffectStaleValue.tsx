import {useEffect, useState} from "react";

const UseEffectStaleValue = () => {
  const [count, setCount] = useState(0);

  /*
  * In this code if we will not add useEffect dependency [count]
  * then it will never log the updated value in log since the
  * value will be stale. If we add the dependency then it will
  * log the updated value.
  * One more drawback is there since to demonstrate the stale
  * value we are using setInterval, it will keep logging the
  * count in console
  * */
  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     console.log(count);
  //   }, 1000);
  //
  //   return () => clearInterval(timer);
  // }, [count]);

  /* Just avoid logging the count if it doesn't update */
  useEffect(() => {
    console.log(count)
  }, [count]);

  return (
    <div>
      <h1> UseEffect Stale Value</h1>
      <p>Count {count}</p>
      <button onClick={() => setCount(c => c + 1)}>Increment Count</button>
    </div>
  )
}

export default UseEffectStaleValue;