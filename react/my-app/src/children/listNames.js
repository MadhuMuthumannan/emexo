export default function ListNames({ names }) {
  const namesList = names.map((name, index) => <li key={index}>{name}</li>);
  return <ol>{namesList}</ol>;
}
