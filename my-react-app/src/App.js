import React, {
  useState,
  useEffect,
  useMemo,
  useCallback,
  useRef,
} from "react";

const App = () => {
  // useState to manage the counter value and message state
  const [counter, setCounter] = useState(0);
  const [message, setMessage] = useState("");

  // useRef to store the previous count value for display
  const prevCounter = useRef(counter);

  // useEffect to show the message when the counter value is 10
  useEffect(() => {
    if (counter === 10) {
      setMessage("Counter reached 10!");
    } else {
      setMessage("");
    }
  }, [counter]);

  // useMemo to memoize the calculation of whether the counter is 10
  const isCounterTen = useMemo(() => counter === 10, [counter]);

  // useCallback to create memoized callback functions for incrementing and resetting the counter value
  const incrementCounter = useCallback(() => {
    setCounter((prevCounter) => prevCounter + 1);
  }, []);

  const resetCounter = useCallback(() => {
    setCounter(0);
  }, []);

  // Update prevCounter ref whenever counter changes
  useEffect(() => {
    prevCounter.current = counter;
  }, [counter]);

  return (
    <div>
      <p>Counter: {counter}</p>
      <p>Previous Counter: {prevCounter.current}</p>
      <button onClick={incrementCounter}>Increment</button>
      <button onClick={resetCounter}>Reset</button>
      {isCounterTen && <p>{message}</p>}
    </div>
  );
};

export default App;
