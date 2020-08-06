// JSX를 사용하기 위해 import
import React, { Component } from 'react';
import PhoneForm from './components/PhoneForm'
import PhoneInfoList from './components/PhoneInfoList';
//Component를 만드는 방법 두가지 (클래스, 함수)

//클래스형
class App extends Component {
  id = 2
  state = {
    information: [
      {
        id: 0,
        name: 'yongjun',
        phone: '010-1111-2222'
      },
      {
        id: 1,
        name: 'mh',
        phone: '010-3333-4444'
      }
    ],
    keyword: ''
  }

  handleChange = (e) => {
    this.setState({
      keyword: e.target.value,
    });
  }

  handleCreate = (data) => {
    const { information } = this.state;
    this.setState({
      // concat : 인자로 주어진 배열이나 값들을 기존 배열에 합쳐 새 배열을 반환
      // ... : 전개연산자, 기존 객체의 내용을 해당 위치에 풀어준 후 우리가
      //       설정하고싶은 값을 넣어 덮어쓸수 있게 함
      information: information.concat({ id: this.id++, ...data })
    })
  }

  handleRemove = (id) => {
    const { information } = this.state;
    this.setState({
      information: information.filter(info => info.id !== id)
    })
  }

  handleUpdate = (id, data) => {
    const { information } = this.state;
    this.setState({
      information: information.map(
        info => id === info.id
          ? { ...info, ...data } // 새 객체를 생성 후 기존값과 data를 덮어씀
          : info // 기존 값 유지
      )
    })
  }



  render() {
    const { information, keyword } = this.state;
    const filteredList = information.filter(
      info => info.name.indexOf(keyword) !== -1
    );
    return (
      <div>
        <PhoneForm
          onCreate={this.handleCreate}
        />
        <p>
          <input
            placeholder="검색 할 이름을 입력하세요.."
            onChange={this.handleChange}
            value={keyword}
          />
        </p>
        <hr />
        <PhoneInfoList
          data={filteredList}
          onRemove={this.handleRemove}
          onUpdate={this.handleUpdate}
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
