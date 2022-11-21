import './App.css';
import { Component } from 'react';

class Subject extends Component {
  render() {
    return (
      <header>
        <h1>WEB</h1>
        world wide web
        </header>
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
        <h2>HTML</h2>
        HTML is HyperText Markup Langugage.
      </article>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Subject></Subject>
        <TOC></TOC>
        <Content></Content>
        {/* 컴포넌트 사용법 */}
      </div>
    );
  }
}

export default App;
