import FirstDiv from './children/firstDiv';
import SecondDiv from './children/secondDiv';
import ThirdDiv from './children/thirdDiv';

function App() {
  const inputNumbers = [1, 2, 3];
  const inputNames = ['Madhu', 'Kumar', 'Karan'];
  return (
    <div>
      <FirstDiv numbers={inputNumbers} />
      <SecondDiv names={inputNames} />
      <ThirdDiv />
    </div>
  );
}

export default App;
