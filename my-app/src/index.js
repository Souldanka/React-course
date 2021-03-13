import React from 'react';
import ReactDOM from "react-dom";


// const el = (
//   <div>
//     <span>One</span> 
//     {/* Отдельно нельзя создать 2 span, нужно обернуть их в div */}
//     <span>Two</span>
//   </div>
// )
// JSX
// const el = <h1> Hello</h1>

//  {} можно использовать для передачи значения атрибутов
// React компонент
const TodoList = () => {
  const items = ["Drink Coffe", "Build Awesome App"];
  return (
    <ul>
      <li>{items[0]}</li>
      <li>{items[1]}</li>
    </ul>
  )
};

// React компонент
const AppHeader = () => {
  return <h1>Me ToDo list</h1>
};

// React компонент
const SearchPanel = () => {
  // {} можно использовать для передачи значения атрибутов
  const searchText = "Type here to search";
  // Передать стиль 
  const searchStyle = {
    fontSize: "20px"
  };
  return  <input 
    style = {searchStyle}
    placeholder={searchText} />
    // class в html
    // className в JSX
    // for в html
    // htmlFor = " " в JSX

 
};

// React компонент
const App = () => {

  
  //  html по умолчанию эскепится 
  // const isLoggedIn = true;
  // const loginBox = <span>Log in please</span>;
  // const welcomeBox = <span>Welcome Back</span>

  // const loginBox = null 
  // не будет ошибка, просто не отобразиться на странице

  return (
    <div>
      {/* { isLoggedIn ? welcomeBox : loginBox } */}
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
