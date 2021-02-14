import './App.css';
// import Food from "./component/Food"
// import Todo from "./component/Todo"
// import Todo from "./TODO/Todo"
import Card from "./compDesignCard/Card"
import cardData from "./compDesignCard/cardData.json"

function App() {
  return (
    <div className="App">
      {/* <Food></Food> */}
      {/* <Todo></Todo> */}
      {/* <Todo></Todo> */}
      {cardData.map(e=><Card key={cardData.id} cardData={e}></Card>)}
      
    </div>
  );
}

export default App;
