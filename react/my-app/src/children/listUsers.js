export default function ListUsers({
  users,
  onFilterChange,
  filterByAge,
  onClickFilterButton,
}) {
  const headings = ['Name', 'Age', 'Gender', 'Rank'].map((heading, index) => (
    <th key={index}>{heading}</th>
  ));
  const rows = users.map((user) => {
    const { id, name, age, gender, rank } = user;
    return gender === 'Female' ? (
      <tr key={id} style={{ color: 'red' }}>
        <td>{name}</td>
        <td>{age}</td>
        <td>{gender}</td>
        <td>{rank}</td>
      </tr>
    ) : (
      <tr key={id}>
        <td>{name}</td>
        <td>{age}</td>
        <td>{gender}</td>
        <td>{rank}</td>
      </tr>
    );
  });
  return (
    <div className="userContainer">
      Filter text input:
      <input
        type="text"
        onChange={(e) => onFilterChange(e.target.value)}
      ></input>
      <input
        type="checkbox"
        onChange={(e) => filterByAge(e.target.checked)}
      ></input>
      Show users below age 30
      <button onClick={() => onClickFilterButton()}>Filter By Text</button>
      <table id="users">
        <tbody>
          <tr>{headings}</tr>
          {rows}
        </tbody>
      </table>
    </div>
  );
}
