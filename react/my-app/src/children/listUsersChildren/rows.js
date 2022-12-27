import { Link } from 'react-router-dom';
import './rows.css';

export default function Rows({ users, onClickEdit }) {
  return users.map((user) => {
    const { id, name, age, gender, rank, qualification } = user;
    return gender === 'Female' ? (
      <tr key={id} style={{ color: 'red' }}>
        <td>{name}</td>
        <td>{age}</td>
        <td>{gender}</td>
        <td>{rank}</td>
        <td>{qualification}</td>
        <td>
          <Link className="navLinks" to={`userDetail/${id}`}>
            Detail
          </Link>
          <span className="edit-btn" onClick={() => onClickEdit(id - 1)}>
            Edit
          </span>
        </td>
      </tr>
    ) : (
      <tr key={id}>
        <td>{name}</td>
        <td>{age}</td>
        <td>{gender}</td>
        <td>{rank}</td>
        <td>{qualification}</td>
        <td>
          <Link className="navLinks" to={`userDetail/${id}`}>
            Detail
          </Link>
          <span className="edit-btn" onClick={() => onClickEdit(id - 1)}>
            Edit
          </span>
        </td>
      </tr>
    );
  });
}
