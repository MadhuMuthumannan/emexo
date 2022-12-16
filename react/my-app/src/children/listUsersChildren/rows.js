import { Link } from 'react-router-dom';

export default function Rows({ users }) {
  return users.map((user) => {
    const { id, name, age, gender, rank } = user;
    return gender === 'Female' ? (
      <tr key={id} style={{ color: 'red' }}>
        <td>{name}</td>
        <td>{age}</td>
        <td>{gender}</td>
        <td>{rank}</td>
        <td>
          <Link className="navLinks" to={`userDetail/${user.id}`}>
            Detail
          </Link>
        </td>
      </tr>
    ) : (
      <tr key={id}>
        <td>{name}</td>
        <td>{age}</td>
        <td>{gender}</td>
        <td>{rank}</td>
        <td>
          <Link className="navLinks" to={`userDetail/${user.id}`}>
            Detail
          </Link>
        </td>
      </tr>
    );
  });
}
