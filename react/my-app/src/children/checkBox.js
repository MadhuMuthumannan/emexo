export default function Checkbox(props) {
  return (
    <div>
      <input
        type="checkbox"
        onChange={(e) => props.inputFunc(e.target.checked)}
      ></input>
      <label>{props.label}</label>
    </div>
  );
}
