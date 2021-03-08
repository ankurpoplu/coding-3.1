import React from 'react'

const Task = ({handleAdd}) => {
    const [input, setInput] = React.useState("")

    const onSubmit = (e) => {
        e.preventDefault();
        handleAdd(input)
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input 
                placeholder="Add Task"
                value={input}
                onChange={e => setInput(e.target.value)}
                />
                <button type="submit">Add Task</button>
            </form>
        </div>
    )
}

export default Task

