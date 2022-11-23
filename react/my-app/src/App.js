import logo from './logo.svg';
import './App.css';
import Child from './one/Child';

function App() {
  const members = [
    {
      name: 'Madhu',
      age: 28,
    },
    {
      name: 'Kumar',
      age: 21,
    },
    {
      name: 'Ramesh',
      age: 12,
    },
  ];
  const listItems = members.map((member) => (
    <Child name={member.name} age={member.age} />
  ));
  return <div>{listItems}</div>;
}

export default App;
