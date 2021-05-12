import './App.css';
// import FluxExample from './views/FluxExample';
import AppContainer from './containers/AppContainer';
import AsyncTest from './AsyncTest';

function App() {
  return (
    <div className="App">
      <h1>Hello, RunSignUp!</h1>
      <br/>
      <AppContainer />
      <br/>
      <AsyncTest />
    </div>
  );
}

export default App;
