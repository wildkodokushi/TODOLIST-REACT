import TodoItem from "./TodoItem"

const TodoList = (props) => {
    const { tasks = [], onDeleteTaskButtonClick, onTaskCompleteChange } = props

    const hasTasks = true

    if(!hasTasks) {
        return <div className="todo__empty-message"></div>
    }

    return (
        <ul className="todo__list">
            {tasks.map((task) => (
                <TodoItem 
                    key={task.id}
                    className="todo__item"
                    onDeleteTaskButtonClick={onDeleteTaskButtonClick}
                    onTaskCompleteChange={onTaskCompleteChange}
                    {...task}
                />
            ))}
        </ul>
    )
}

export default TodoList