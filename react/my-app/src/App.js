import {Link} from 'react-router-dom';
import './App.css';
export default function App() {
  return (
    <>
      <Link to="/displayCount">Display Count</Link>
      <Link to="/userDetail">User Detail</Link>
      <Link to="/listNames">List Names</Link>
      <Link to="/listUsers">List Users</Link>
    </>
  );
}
