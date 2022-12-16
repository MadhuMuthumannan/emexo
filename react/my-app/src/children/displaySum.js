import React from 'react';
import './displaySum.css';
export default function DisplaySum() {
  const numbers = [1, 2, 3];
  let sum = 0;
  numbers.forEach((num) => (sum += num));
  return (
    <div className="container orangeContainer">
      <p>Display Sum Component</p>
      <div>Input numbers are "{numbers.join(',')}"</div>
      <div>Total is {sum}</div>
    </div>
  );
}
