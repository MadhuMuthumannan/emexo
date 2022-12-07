export default function TextBox({ onFilterChange }) {
  return (
    <input type="text" onChange={(e) => onFilterChange(e.target.value)}></input>
  );
}
