import { useReducer } from "react"
import useCounterStore from "./store";

interface Action {
  type: 'INCREMENT' | 'RESET';
}

const counterReducer = (state: number, action: Action): number => {
  if (action.type === 'INCREMENT') return state + 1;
  if (action.type === 'RESET') return 0;
  return state;
}

function Counter() {
  const { counter, max, increment, reset, maxout } = useCounterStore();

  return (
    <div>
      Counter {counter}
      Max: {max}
      <button
        onClick={increment}
        className="btn btn-primary mx-1"
      >Increment</button>
      <button
        onClick={reset}
        className="btn btn-primary mx-1"
      >Reset</button>
      <button
        onClick={maxout}
        className="btn btn-primary mx-1"
      >MaxOut</button>
    </div>
  )
}

export default Counter