import logo from './logo.svg';
import './App.css';
import Child from './one/child';

function App() {
  const numbers = [1, 2, 3, 4];
  const listItems = numbers.map((num) => <li>The number is {num}</li>);
  return <div>{listItems}</div>;
}

export default App;
