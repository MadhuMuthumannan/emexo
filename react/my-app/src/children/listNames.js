export default function ListNames(props) {
  const listItems = props.names.map((name) => <li>{name}</li>);
  return (
    <div>
      <ol>{listItems}</ol>
    </div>
  );
}