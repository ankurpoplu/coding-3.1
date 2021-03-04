import './App.css';
import TodoInplist from './Todocomponent/TodoInplist';
import TodoInput from './Todocomponent/TodoInput';
import TodoList from './Todocomponent/TodoList';
// import Counter from './componentcal/Counter';

function App() {
  return (
    <div className="App">
      <TodoInput></TodoInput>
      <TodoList></TodoList>
    </div>
  );
}

export default App;
