import { useState } from "react";

export default function TodoApp() {
    const [todo, setTodo] = useState('');
    const onChange = (e) => {
        setTodo(e.target.value)
    }

    return (
        <div>
            <input 
                type="text" 
                placeholder="Write your to do..."
                value={todo}
                onChange={onChange}
            />
        </div>
    )
}