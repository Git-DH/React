import { useState, useEffect } from 'react';

function Hello() {
    useEffect(() => {
        console.log('Hello!');
        // clean up: useEffect에서 return하는 함수
        return () => {
            console.log('Bye!!');
        };
    }, []);

    return (
        <div>
            <strong>Hello!!!</strong>
        </div>
    )
}

export default function Exam6() {
    const [showing, setShowing] = useState(false);
    const onClickBtn = (e) => {
        setShowing(preVal => !preVal)
        console.log(showing);
    }
    
    return (
        <div>
            <button onClick={onClickBtn}>
                {showing ? 'hide' : 'show'}
            </button>
            {showing ? <Hello /> : null}
        </div>
    )
}