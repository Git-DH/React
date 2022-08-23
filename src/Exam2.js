import {useState} from 'react';
// re rand 되도록 임포트 해줌

function Exam2() {
    // const data = useState(0); 
    // //배열이 넘어온다.
    // // 0번 방에는 값, 1번 방에는 값변화를 줄 수 있는 함수
    // const counter = data[0];
    // const setCounter = data[1];

    const [counter, setCounter] = useState(0);
    // 위의 코드와 같다.
    // useState뒤에오는 값이 counter의 기본값이 된다.

    function countUp() {
        // counter = counter + 1;
        // console.log(counter);
        // console.log(data);
        // setCounter(counter + 1);
        setCounter(preVal => preVal + 1);
        // 콜백 함수를 쓰는게 더 좋다.
    }

    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={countUp}>Click Me</button>
        </div>
    )
}
export default Exam2;