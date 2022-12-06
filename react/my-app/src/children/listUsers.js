export default function ListUsers({ users, onFilterChange }) {
  const headings = ['Name', 'Age', 'Gender', 'Rank'].map((heading, index) => (
    <th key={index}>{heading}</th>
  ));
  const rows = users.map((user) => {
    return user.gender === 'Female' ? (
      <tr key={user.id} style={{ color: 'red' }}>
        <td>{user.name}</td>
        <td>{user.age}</td>
        <td>{user.gender}</td>
        <td>{user.rank}</td>
      </tr>
    ) : (
      <tr key={user.id}>
        <td>{user.name}</td>
        <td>{user.age}</td>
        <td>{user.gender}</td>
        <td>{user.rank}</td>
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
      <table id="users">
        <tbody>
          <tr>{headings}</tr>
          {rows}
        </tbody>
      </table>
    </div>
  );
}
