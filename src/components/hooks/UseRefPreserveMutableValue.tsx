import {useEffect, useRef, useState} from "react";

const UseRefPreserveMutableValue = () => {
  const [name, setName] = useState("");

  const countRef = useRef<number>(0);
  const renderCount = useRef<number>(1);

  /*
  * Since on Input Change we are updating the state and state update
  * will re-render the component then updated ref value will be
  * rendered on UI
  * */
  useEffect(() => {
    renderCount.current++;
  });

  /*
  * This will nt re-render the component so count will not be
  * shown on UI only we can see it in console
  * */
  useEffect(() => {
    const interval = setInterval(() => {
      countRef.current++;
      // console.log(countRef.current);
    }, 1000);

    return () => {clearInterval(interval);}
  }, []);

  return (
    <div>
      <h1>Preserve mutable values across render</h1>
      <p>{countRef.current}</p>

      <input value={name} onChange={e => setName(e.target.value)} />
      <div>My name is {name}</div>
      <div>I rendered {renderCount.current} times</div>
    </div>
  );
}

export default UseRefPreserveMutableValue;