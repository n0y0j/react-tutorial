// JSX를 사용하기 위해 import
import React, { Component } from 'react';
import './App.css'
//Component를 만드는 방법 두가지 (클래스, 함수)

//클래스형
class App extends Component {
  render() {
    const name = 'react';
    const value = 1;
    // const style = {
    //   backgroundColor: 'black',
    //   padding: '16px',
    //   color: 'white',
    //   fontSize: '12px'
    // };

    return (
      <div>
        {/* <div style={style}>hi there</div> */}
        <div className="App">리액트</div>
        <div> hello {name}!</div>
        <div>
          {
            1 + 1 === 2
              ? (<div>맞아요!</div>)
              : (<div>틀려요!</div>)
          }
        </div>
        <div> {
          1 + 1 === 2 && (<div>맞아요!</div>)
        }</div>
        <div>
          {
            (function () {
              if (value === 1) return (<div>하나</div>);
              if (value === 2) return (<div>둘</div>);
              if (value === 3) return (<div>셋</div>);
            })()
          }
        </div>
        <div> {
          (() => {
            if (value === 1) return (<div>하나</div>);
            if (value === 2) return (<div>둘</div>);
            if (value === 3) return (<div>셋</div>);
          })()
        }
        </div>
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
