import {type JSX, useState} from "react";

const CounterUsingRenderProps = ({render}: { render: (count: number, increment: () => void) => JSX.Element }) => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);

  return render(count, increment);
}

export default CounterUsingRenderProps;
