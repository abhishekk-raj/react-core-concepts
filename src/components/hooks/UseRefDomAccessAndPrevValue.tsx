import {useEffect, useRef, useState} from "react";

const UseRefDomAccessAndPrevValue = () => {
  const [name, setName] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const prevName = useRef<string>(null);

  /*
  * Here we are just updating prevName ref with the name value
  * so it will always have the previous value then the most recent one
  * */
  useEffect(() => {
    prevName.current = name;
  }, [name]);

  /*
  * Here we are using reference of input element
  * and on button click just focusing it
  * */
  const handleClick = () => {
    inputRef.current?.focus();
  }

  return (
    <div>
      <h1>Use Ref DOM Access and Previous Value</h1>
      <input ref={inputRef} onChange={(e) => setName(e.target.value)} value={name} />
      <button onClick={handleClick}>Focus Input</button>

      <p>Previous Name: {prevName.current}</p>
      <p>Current Name: {name}</p>
    </div>
  );
}

export default UseRefDomAccessAndPrevValue;