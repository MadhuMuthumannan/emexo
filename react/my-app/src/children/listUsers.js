export default function ListUsers(props) {
  const headings = ['Name', 'Age', 'Gender'].map((heading, index) => (
    <th key={index}>{heading}</th>
  ));
  console.log(headings);
  const rows = props.users.map((user) => {
    return user.gender === 'Female' ? (
      <tr key={user.id} style={{ color: 'red' }}>
        <td>{user.name}</td>
        <td>{user.age}</td>
        <td>{user.gender}</td>
      </tr>
    ) : (
      <tr key={user.id}>
        <td>{user.name}</td>
        <td>{user.age}</td>
        <td>{user.gender}</td>
      </tr>
    );
  });
  console.log(rows);
  return (
    <div>
      <table id="users">
        <tbody>
          <tr>{headings}</tr>
          {rows}
        </tbody>
      </table>
    </div>
  );
}
