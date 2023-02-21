import { useState } from "react"

export default function TodoList() {
    // Hooks
    const [todoList, updateTodoList] = useState([]);
    const [userInput, updateUserInput] = useState('');

    const onChange = (event) => {updateUserInput(event.target.value)}
    return (
        <div id="newtask">
            <input type="text" placeholder="Add Tasks" onChange={onChange}/>
            <button id="push" onClick={() => {
                if (todoList.includes(userInput)) {
                    alert("Get Smarter");
                    return;
                } else {
                    updateTodoList([
                        ...todoList, userInput 
                    ])
                }
            }}>Add</button>
            <div className="container">
                {todoList.map(todo => {
                    return (
                        <div key={todo}>
                            <p>{todo}</p>
                            <button onClick={() => {
                                updateTodoList([
                                    ...todoList.filter(todoToRemove => { return todoToRemove !== todo })
                                ])
                            }}>X</button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
