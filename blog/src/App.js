import './App.css';
import { Component } from 'react';
import TOC from "./components/TOC";
import Content from './components/content';
import Subject from './components/subject';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      subject:{title:'WEB', sub:'world wide web!'},
      contents: [
        {id:1, title:'HTML', desc:'HTML is HyperText ...'},
        {id:2, title:'CSS', desc:'CSS for design'},
        {id:3, title:'JavaScript', desc:'JavaScript is for interactive'},
      ]
    }
  }
  // <state>
  // conponent가 실행 될 때 render보다 먼저 실행하고 
  // component를 초기화 시켜주고싶은 코드는
  // constructor를 짜고 그 안에 코드를 작성해야한다.
  render() {
    return (
      <div className='App'>
        <Subject 
          title={this.state.subject.title} 
          sub={this.state.subject.sub}>
        </Subject>
        {/* props를 사용하여 원하는 대로 수정이 가능 */}
        <TOC data={this.state.contents}></TOC>
        <Content title="HTML" desc="HTML is HyperText Markup Langugage."></Content>
        {/* 컴포넌트 사용법 */}
      </div>
    );
  }
}
// 컴포넌트 만드는 형식(객체방식)
// render라는 함수가 있어야 한다.
// 컴포넌트를 만들땐 하나의 최상위 태그만 사용해야한다.

export default App;
