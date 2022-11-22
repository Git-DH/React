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
      mode:'read',
      subject:{title:'WEB', sub:'world wide web!'},
      welcome:{title:'welcome', desc:'Hello, React!!'},
      contents: [
        {id:1, title:'HTML', desc:'HTML is for information'},
        {id:2, title:'CSS', desc:'CSS for design'},
        {id:3, title:'JavaScript', desc:'JavaScript is for interactive'},
      ]
    }
  }
  // react에서는 props나 state의 값이 바뀌면 render함수도 다시 호출된다.(vue의 update와 비슷)
  // render함수: 어떤 html을 그릴것인지 정하는 것
  render() {
    let _title, _desc = null;
    if(this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if(this.state.mode === 'read') {
      _title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc;
    }
    return (
      <div className='App'>
        {/* <Subject 
          title={this.state.subject.title} 
          sub={this.state.subject.sub}>
        </Subject> */}
        <header>
          <h1><a href='/' onClick={function(e){
            console.log(e);
            e.preventDefault(); //기본적인 html태그의기능을 사용하지 못하게 하는코드
            // this.state.mode='welcome'; 이 코드로는 이벤트 작동이 안된다.
            this.setState({
              mode:'welcome'
            })// react에서 사용하는 방식
          }.bind(this)}>{this.state.subject.title}</a></h1>
          {/* bind(this): 이벤트의 e로인해 this의 값을 찾을 수 없을때 추가해준다. */}
          {this.state.subject.sub}
          </header>
        {/* 컴포넌트 사용법: html 태그사용과 비슷하게 사용 */}
        <TOC data={this.state.contents}></TOC>
        {/* 상위 컴포넌트의 값을 하위 컴포넌트로 props를 이용하여 전달 가능하다. */}
        <Content title={_title} desc={_desc}></Content>
        {/* props를 사용하여 원하는 대로 수정이 가능 */}
      </div>
    );
  }
}
// 컴포넌트 만드는 형식(객체방식)
// render라는 함수가 있어야 한다.
// 컴포넌트를 만들땐 하나의 최상위 태그만 사용해야한다.

export default App;
