export default function DisplaySum({ numbers }) {
  let sum = 0;
  numbers.forEach((num) => (sum += num));
  return (
    <div className="displaySumContainer">
      <p>Display Sum Component</p>
      <div>Input numbers are "{numbers.join(',')}"</div>
      <div>Total is {sum}</div>
    </div>
  );
}
