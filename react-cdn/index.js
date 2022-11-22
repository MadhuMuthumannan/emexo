const container = document.getElementById('root');
let counter = 0;
const print = () => console.log(counter++);
ReactDOM.createRoot(container).render(
  6 > 2 ? (
    <div>
      <h1>Hello World !</h1>
      <h1 className="blue">Hello World !</h1>
      <span>{1 + 2}</span>
      <button onClick={print}>Click</button>
    </div>
  ) : (
    <div>
      <span>Fall back !</span>
    </div>
  )
);
