import React, { Component } from 'react';

class PhoneInfo extends Component {
  static defaultProps = {
    info: {
      name: '이름',
      phone: '010-0000-0000',
      id: 0
    } // 객체
  }

  state = {
    // 수정버튼 클릭시 값을 true로 변경
    // 값이 true일 시 기존 텍스트 형태로 보여주던 값이 input의 형태로 보여줌
    editing: false,
    // input의 필드 값
    name: '',
    phone: ''
  }

  handleRemove = () => {
    // 삭제 버튼 클릭시 onRemove에 id 넣어 호출
    const { info, onRemove } = this.props;
    onRemove(info.id);
  }

  // editing 값을 변환시키는 함수
  handleToggleEdit = () => {
    const { editing } = this.state;
    this.setState({ editing: !editing });
  }

  // input에서 onChange 이벤트 발생 시 호출 됨
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  componentDidUpdate(prevProps, prevState) {
    // editing 값이 바뀔 때 처리 할 로직
    // 수정 버튼 클릭 시 기존의 값이 input에 나타나고
    // 수정 적용시 input의 값을 부모에게 전달한다
    const { info, onUpdate } = this.props;
    // editing 값이 false -> true 일 때
    if (!prevState.editing && this.state.editing) {
      this.setState({
        name: info.name,
        phone: info.phone
      })
    }

    if (prevState.editing && !this.state.editing) {
      // editing 값이 true -> flase 일 때
      onUpdate(info.id, {
        name: this.state.name,
        phone: this.state.phone
      });
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    // 수정 상태가 아닌, info 값이 같다면 리렌더링 x
    if (!this.state.editing
      && !nextState.editing
      && nextProps.info === this.props.info) {
      return false;
    }
    // 나머지 경우엔 리렌더링
    return true;
  }

  render() {
    console.log('render PhoneInfo' + this.props.info.id);
    const style = {
      border: '1px solid black',
      padding: '8px',
      margin: '8px'
    };

    const { editing } = this.state;

    if (editing) {
      return (
        <div style={style}>
          <div>
            <input
              value={this.state.name}
              name="name"
              placeholder="이름"
              onChange={this.handleChange}
            />
            <div>
              <input
                value={this.state.phone}
                name="phone"
                placeholder="전화번호"
                onChange={this.handleChange}
              />
            </div>
            <button onClick={this.handleToggleEdit}>적용</button>
            <button onClick={this.handleRemove}>삭제</button>
          </div>
        </div>
      );
    }

    const {
      name, phone
    } = this.props.info; // 부모 컴포넌트에게 인자로 받아옴

    return (
      <div style={style}>
        <div><b>{name}</b></div>
        <div>{phone}</div>
        <button onClick={this.handleToggleEdit}>수정</button>
        <button onClick={this.handleRemove}>삭제</button>
      </div>
    )
  }
}

export default PhoneInfo;