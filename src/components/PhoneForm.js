import React, { Component } from 'react';

class PhoneForm extends Component {
  state = {
    name: '',
    phone: ''
  }

  handleChange = (e) => {
    this.setState({
      // input의 name 값을 통해서 구분됨
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    // 페이지 리로딩 방지
    e.preventDefault();
    // 상태값을 부모에게 전달
    this.props.onCreate(this.state);
    // 초기화
    this.setState({
      name: '',
      phone: ''
    })
  }

  // handleChange = (e) => {
  //   this.setState({
  //     name: e.target.value
  //   })

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          placeholder="이름"
          value={this.state.name}
          onChange={this.handleChange}
          name="name"
        />
        <input
          placeholder="전화번호"
          value={this.state.phone}
          onChange={this.handleChange}
          name="phone"
        />
        <button type="submit">등록</button>
      </form>
    );
  }
}

export default PhoneForm