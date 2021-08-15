// 8/13

// Number 1: requirment:
// do a request when stop typing after 1 second
import './styles.css';
import React, { useRef } from 'react';

const mockApiCall = (query) =>
  new Promise((res, rej) => {
    setTimeout(() => {
      res(`Data Back, Query:${query}`);
    }, 500);
  });

export default function App() {
  const [userInput, setUserInput] = React.useState('');
  const timer = useRef(null);
  const preTime = useRef(Date.now());

  const handleChange = (e) => {
    preTime.current = Date.now();
    setUserInput(e.target.value);
    clearTimeout(timer.current);
  };

  React.useEffect(() => {
    timer.current = setTimeout(() => {
      mockApiCall(userInput).then((data) => {
        console.log(
          `Start fetching when stop typing after ${
            Date.now() - preTime.current
          } milisecond.`
        );
        console.log(data);
      });
    }, 500);
  }, [userInput]);

  return (
    <div className="App">
      <input value={userInput} onChange={handleChange} />
      <div>{userInput}</div>
    </div>
  );
}


// Number 2: requirement: stop-stare-watch

// check the answer here: https://codesandbox.io/s/start-stop-watch-v1u9d

// Number 3: create a react app like the mock up. https://docs.google.com/document/d/1cEA_a_DbzsmuMlJqE5j2hGi-mNLhIIbmFCrneoWfgrM/edit
// - 辅助资料：https://reactjs.org/docs/forms.html#the-select-tag

// 