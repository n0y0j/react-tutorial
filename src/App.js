// JSX를 사용하기 위해 import
import React, { Component } from 'react';
import './App.css'
import MyName from './components/MyName';
import Counter from './components/Counter';
import PhoneForm from './components/PhoneForm'
//Component를 만드는 방법 두가지 (클래스, 함수)

//클래스형
class App extends Component {
  handleCreate = (data) => {
    console.log(data);
  }
  render() {
    return (
      <div>
        <PhoneForm
          onCreate={this.handleCreate}
        />
      </div>
    );
  }
}



//함수형
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
