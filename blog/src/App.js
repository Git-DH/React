import './App.css';
import { Component } from 'react';
import TOC from "./components/TOC";
import Content from './components/content';
import Subject from './components/subject';

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
// 컴포넌트 만드는 형식(객체)
// render라는 함수가 있어야 한다.
// 컴포넌트를 만들땐 하나의 최상위 태그만 사용해야한다.

export default App;
