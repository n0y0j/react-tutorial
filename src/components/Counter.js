import React, { Component } from 'react';

const Problematic = () => {
  throw (new Error('버그가 나타났다!'));
  return (
    <div>

    </div>
  );
};
class Counter extends Component {
  state = {
    number: 0
  }

  constructor(props) {
    super(props);
    console.log('constructor');
  }

  // 컴포넌트가 화면에 나타나기 직전에 호출
  componentWillMount() {
    console.log('componentWillMount (deprecated');
  }

  // 컴포넌트가 화면에 나타났을 때 호출
  // 컴포넌트가 필요로하는 데이터를 요청 (axios나 fectc 등을 통해 ajax 요청)
  // DOM의 속성을 읽거나 변경하는 작업
  componentDidMount() {
    console.log('componentDidMount');
  }

  // 컴포넌트를 최적화하기 위해 사용
  // 낭비되는 CPU의 처리량을 줄이기 위함
  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate');
    if (nextState.number % 5 === 0) return false;
    return true;
  }

  // shouldComponentUpdate에서 true를 반환시 호출됨
  // 애니메이션 효과를 초기화하거나 이벤트 리스너를 없애는 작업을 함
  // 이 함수가 호출 된 후 render()가 호출됨
  componentWillUpdate(nextProps, nextState) {
    console.log('componentWillUpdate');
  }

  // render()를 호출하고 난 다음 발생
  // this.props와 this.state의 값이 바뀌어있고 이전 값을 조회할 수 있다.
  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate');
  }

  // render() 함수에서 에러 발생시 유용하게 사용
  componentDidCatch(error, info) {
    this.setState({
      error: true
    });
  }

  // handleIncrease = () => {
  //   this.setState({
  //     number: this.state.number + 1
  //   });
  // }

  handleIncrease = () => {
    const { number } = this.state
    this.setState({
      number: number + 1
    });
  }

  handleDecrease = () => {
    this.setState(
      ({ number }) => ({
        number: number - 1
      })
    )
  }

  render() {
    if (this.state.error) return (<h1>Error!!</h1>);
    return (
      <div>
        <h1>Counter</h1>
        <div>Value: {this.state.number}</div>
        {this.state.number === 4 && <Problematic />}
        <button onClick={this.handleIncrease}>+</button>
        <button onClick={this.handleDecrease}>-</button>
      </div>
    );
  }
}

export default Counter;