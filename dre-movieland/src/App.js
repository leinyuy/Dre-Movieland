import './App.css';

const App = () => {
  const name = 'john';
  const isName = true;
  return (
    <div className="App">
      <h1>Hello { isName? name: 'Someone'}!</h1>
    </div>
  );
}

export default App;
