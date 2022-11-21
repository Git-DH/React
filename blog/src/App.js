import './App.css';
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
// 컴포넌트 만드는 형식(객체)
// render라는 함수가 있어야 한다.
// 컴포넌트를 만들땐 하나의 최상위 태그만 사용해야한다.

class TOC extends Component {
  render() {
    return (
      <nav>
        <ul>
            <li><a href="1.html">HTML</a></li>
            <li><a href="2.html">CSS</a></li>
            <li><a href="3.html">JavaScript</a></li>
        </ul>
        </nav>
    );
  }
}

class Content extends Component{
  render() {
    return(
      <article>
        <h2>{this.props.title}</h2>
        {this.props.desc}
      </article>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Subject title="WEB" sub="world wide web!"></Subject>
        {/* props를 사용하여 원하는 대로 수정이 가능 */}
        <TOC></TOC>
        <Content title="HTML" desc="HTML is HyperText Markup Langugage."></Content>
        {/* 컴포넌트 사용법 */}
      </div>
    );
  }
}

export default App;
