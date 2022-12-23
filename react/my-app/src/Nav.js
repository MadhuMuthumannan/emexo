import { NavLink } from 'react-router-dom';
import './Nav.css';
export default function Nav() {
  return (
    <div className="navLinkContainer">
      <NavLink to="/displayCount">Display Count</NavLink>
      <NavLink to="/displaySum">Display Sum</NavLink>
      <NavLink to="/listNames">List Names</NavLink>
      <NavLink to="/listUsers">List Users</NavLink>
      <NavLink to="/axios">Axios</NavLink>
      <NavLink to="/nested">Nested</NavLink>
    </div>
  );
}
