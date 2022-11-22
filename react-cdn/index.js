const container = document.getElementById('root');
const root = ReactDOM.createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <div>
    <h1>Hello World !</h1>
    <span>Count : {1 + 2}</span>
  </div>
);
