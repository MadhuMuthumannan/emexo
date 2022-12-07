export default function Rows({ users }) {
  console.log(users);
  return users.map((user) => {
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
}
