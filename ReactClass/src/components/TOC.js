import { Component } from 'react';

class TOC extends Component {
    render() {
      let lists = [];
      // 배열에 담는다는 코드
      let data = this.props.data; //state값을 props로 받음
      let i = 0;
      while(i < data.length){
        lists.push(<li key={data[i].id}><a href={"/content/"+data[i].id}>{data[i].title}</a></li>);
        // 반복문을 작성할때 key값을 지정해 줘야한다.
        i = i + 1;
      }
      return (
        <nav>
          <ul>
              {lists}
          </ul>
          </nav>
      );
    }
  }

export default TOC;
// TOC라는 클래스를 외부에서 가져다 쓸수있게 해준다.