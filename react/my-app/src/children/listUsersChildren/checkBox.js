export default function Checkbox({ filterByAge }) {
  return (
    <div>
      <input
        type="checkbox"
        onChange={(e) => filterByAge(e.target.checked)}
      ></input>
      Show users below age 30
    </div>
  );
}
