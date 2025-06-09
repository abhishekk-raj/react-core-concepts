import {useMemo, useState} from "react";

/*
* Issue with this component is that even if parent component's input is not changing
* Its being called and factorial is being calculated that is unnecessary
* */
// const ExpensiveComponent = ({number}: {number: number}) => {
//   const factorial = () => {
//     console.log('Calculating factorial');
//     let result = 1;
//     for (let i = 1; i <= number; i++) {
//       result *= i;
//     }
//     return result;
//   }
//   return <p>Factorial of {number} is {factorial()}</p>
// }

/*
* To prevent the above issue we can use useMemo to memoize the value
* and will use number as dependency so it will only being called if
* number is changed
* */
const ExpensiveComponent = ({number}: {number: number}) => {
  const factorial = useMemo(() => {
    console.log('Calculating factorial');
    let result = 1;
    for (let i = 1; i <= number; i++) {
      result *= i;
    }
    return result;
  }, [number]);
  return <p>Factorial of {number} is {factorial}</p>
}

const UseMemoExpensiveCalculation = () => {
  const [number, setNumber] = useState(0);
  const [theme, setTheme] = useState("dark");

  const handleCfBtn = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  return (
    <div>
      <h1>Use Expensive component</h1>
      <ExpensiveComponent number={number} />

      <input type="number" onChange={(e) => setNumber(Number(e.target.value))} value={number}
             style={{background: theme === "light" ? "white" : "black", color: theme === "light" ? 'black' : 'white'}} />
      <button onClick={handleCfBtn}>Change theme</button>
    </div>
  );
}

export default UseMemoExpensiveCalculation;
