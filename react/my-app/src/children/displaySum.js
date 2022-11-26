export default function DisplaySum(props) {
  let sum = 0;
  props.numbers.forEach((num) => (sum += num));
  return (
    <div className="displaySumContainer">
      <p>Display Sum Component</p>
      <div>Input numbers are "{props.numbers.join(',')}"</div>
      <div>Total is {sum}</div>
    </div>
  );
}
