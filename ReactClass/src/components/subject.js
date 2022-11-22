import { Component } from 'react';

class Subject extends Component {
    render() {
      return (
        <header>
          <h1><a href='/'>{this.props.title}</a></h1>
          {this.props.sub}
          {/* 상위 컴포넌트의 값을 state와 props로 받아왔다. */}
          </header>
          // props를 사용하여 사용자정의 태그를 만들 수 있다.
      );
    }
  }

export default Subject;