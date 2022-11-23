export default function FirstDiv(props) {
  let sum = 0;
  props.numbers.forEach((num) => (sum += num));
  return <div>Total is {sum}</div>;
}
