import TodoItem from "./TodoItem"

const TodoList = (props) => {
    const { tasks = [], onDeleteTaskButtonClick, onTaskCompleteChange, filteredTasks } = props

    const hasTasks = tasks.length > 0
    const isEmptyFilterTasks = filteredTasks?.length === 0

    if(!hasTasks) {
        return <div className="todo__empty-message">There ara no tasks yet</div>
    }

    if(hasTasks && isEmptyFilterTasks) {
        return <div className="todo__empty-message">Tasks not found</div>
    }

    return (
        <ul className="todo__list">
            {(filteredTasks ?? tasks).map((task) => (
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