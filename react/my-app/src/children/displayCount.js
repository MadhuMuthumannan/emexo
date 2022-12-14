import React from 'react';
export default function DisplayCount() {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <h3>Count component</h3>
      <div>Count from parent {count}</div>
      <button onClick={() => setCount(count + 1)}>Increment Counter</button>
      <button onClick={() => setCount(count - 1)}>Decrement Counter</button>
    </div>
  );
}
