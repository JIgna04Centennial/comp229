import logo from './logo.svg';
import './App.css';
import List from './List.js';
import React from 'react';


const name = 'Jimmy is the best';
const greeting = 'Welcome!';

//Define component that uses props.children
// function List (props) {
//   return (
//     <ul>
//       {props.children}
//     </ul>
//   );
// };

// function App() {
//   return (
//     <div className="App">
//       <h1>{greeting} {name}</h1>
//     </div>
//   );
// }

class Welcome extends React.Component {
 render() {
          return <h1>Welcome message</h1>;
        }
}

class App extends React.Component {
  render() {
    return (
      <Welcome/>
    );
  }

};
export default App;
