import './App.css';
import { Component } from 'react';
import TOC from "./components/TOC";
import Content from './components/content';
import Subject from './components/subject';

class App extends Component {
  // <state값 초기화>
  // component가 실행 될 때 render보다 먼저 실행하고 
  // component를 초기화 시켜주고싶은 코드는
  // constructor를 짜고 그 안에 코드를 작성해야한다.(construct가 초기화를 담당)
  constructor(props){
    super(props);
    // 원하는 값을 state로 만들고 그 값을 props로 보낼 수 있도록 함
    this.state = {
      subject:{title:'WEB', sub:'world wide web!'},
      contents: [
        {id:1, title:'HTML', desc:'HTML is HyperText ...'},
        {id:2, title:'CSS', desc:'CSS for design'},
        {id:3, title:'JavaScript', desc:'JavaScript is for interactive'},
      ]
    }
  }
  
  render() {
    return (
      <div className='App'>
        <Subject 
          title={this.state.subject.title} 
          sub={this.state.subject.sub}>
        </Subject>
        {/* 컴포넌트 사용법: html 태그사용과 비슷하게 사용 */}
        <TOC data={this.state.contents}></TOC>
        {/* 상위 컴포넌트의 값을 하위 컴포넌트로 props를 이용하여 전달 가능하다. */}
        <Content title="HTML" desc="HTML is HyperText Markup Langugage."></Content>
        {/* props를 사용하여 원하는 대로 수정이 가능 */}
      </div>
    );
  }
}
// 컴포넌트 만드는 형식(객체방식)
// render라는 함수가 있어야 한다.
// 컴포넌트를 만들땐 하나의 최상위 태그만 사용해야한다.

export default App;
