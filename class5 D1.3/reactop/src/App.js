import './App.css';
import NavProduct from './product/NavProduct';
import Products from './product/Products';
import RoutProduct from './product/RoutProduct';
// import Navbar from './components/Navbar';
// import Routes from './Router/Routes';

function App() {
  return (
    <div className="App">
      {/* <Navbar></Navbar> */}
      {/* <Routes></Routes> */}
      <NavProduct></NavProduct>
      <RoutProduct></RoutProduct>
    </div>
  );
}

export default App;
