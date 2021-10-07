// props.children
import React from 'react';

function GreetComponent(props) {
  return (
    <div>
      <h1>Hello {props.name}</h1>
      {props.children}
    </div>
  );
}

function App1() {
  return <GreetComponent name="Tony" children={<p>DEF</p>} />;
}

function App2() {
  return (
    <GreetComponent name="Tony">
      <p>hello</p>
    </GreetComponent>
  );
}

export default App;

// Both App1 and App2 work. 
// 如果两种并存在同一个组件，优先使用 App2 的形式
//---------------------

// children props

// passing Props from Child to Parent component in React.js
