import React from 'react';
import ReactDOM from "react-dom";

// JSX
// const el = <h1> Hello</h1>

// React компонент
const TodoList = () => {
  return (
    <ul>
      <li>Learn React</li>
      <li>Build Awesome App</li>
    </ul>
  )
};

// React компонент
const AppHeader = () => {
  return <h1>Me ToDo list</h1>
};

// React компонент
const SearchPanel = () => {
  return  <input placeholder="search" />
};

// React компонент
const App = () => {
  return (
    <div>
      <AppHeader/>
      <SearchPanel />
      <TodoList />
   </div>
  );
};


// // JS
// const el = React.createElement('h1', null, 'Hello!!')

ReactDOM.render(<App />, 
  document.getElementById('root'));
