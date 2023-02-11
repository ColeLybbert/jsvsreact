export default function TodoList() {
    return (
        <div class="container">
            <div id="newtask">
                <input type="text" placeholder="Add Tasks"></input>
                <button id="push">Add</button>
            </div>
            <div id="tasks"></div>
        </div>
    )
}
