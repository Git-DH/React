import { Component } from 'react';

class Subject extends Component {
    render() {
      return (
        <header>
          <h1>{this.props.title}</h1>
          {this.props.sub}
          </header>
          // props를 사용하여 사용자정의 태그를 만들 수 있다.
      );
    }
  }

export default Subject;