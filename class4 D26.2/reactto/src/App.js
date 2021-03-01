import './App.css';
import Navbar from './components/Navbar';
import Routes from './Router/Routes';

function App() {
  return (
    <div className="App">
      {/* <h3>{process.env.REACT_APP_TOKEN}</h3>
      <h3>{process.env.REACT_APP_NAME}</h3> */}
      <Navbar></Navbar>
      <Routes></Routes>
    </div>
  );
}

export default App;
