import React, { Component } from 'react';

const MyName = ({ name }) => {
  return (
    <div>Hi! My name is {name}.</div>
  );
};

// 클래스형
// class MyName extends Component {
//   static defaultProps = {
//     name: 'BasicName'
//   };
//   render() {
//     return (
//       <div>Hi! My name is <b>{this.props.name}</b> 입니다.</div>
//     );
//   }
// }

MyName.defaultProps = {
  name: 'BasicName'
};


export default MyName;