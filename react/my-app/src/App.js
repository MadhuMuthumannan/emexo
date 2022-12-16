import {NavLink} from 'react-router-dom';
import './App.css';
export default function App() {
  return (
    <div className='navLinkContainer'>
      <NavLink to="/displayCount">Display Count</NavLink>
      <NavLink to="/displaySum">Display Sum</NavLink>      
      <NavLink to="/listNames">List Names</NavLink>
      <NavLink to="/listUsers">List Users</NavLink>  
    </div>
  );
}
