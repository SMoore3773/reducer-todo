import React from 'react';
import TodoList from'./components/TodoList';
import './App.css';
// import './components/Todo.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <div>
         <TodoList/>
       </div>
      </header>
    </div>
  );
}

export default App;
