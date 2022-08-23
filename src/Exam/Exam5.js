import { useState, useEffect } from 'react';

export default function Exam5() {
    const [counter, setCounter] = useState(0);
    const [keyword, setkeyword] = useState('');

    console.log(`search for ${keyword}`);

    function countUp() {
        setCounter(preVal => preVal + 1)
    }

    function countDown() {
        if(counter > 0){
            setCounter(preVal => preVal - 1)
        }
    }

    const onChangeText = (e) =>{
        setkeyword(e.target.value);
    }

    useEffect(() => {
        if(keyword.length > 5) {
            console.log('AAA');
        }
    }, [keyword])

    return (
        <div>
            <input 
                type="text" 
                placeholder='Search here...'
                value={keyword}
                onChange={onChangeText}
            />
            <h1>{counter}</h1>
            <button onClick={countUp}>+</button>
            <button onClick={countDown}>-</button>
        </div>
    )
}