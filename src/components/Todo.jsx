import AddTaskForm from "./AddTaskForm"
import SearchTaskForm from "./SearchTaskForm"
import TodoInfo from "./TodoInfo"
import TodoList from "./TodoList"

const Todo = () => {
    const tasks = [
        { id: 'task-1', title: 'Купить молоко', isDone: false },
        { id: 'task-2', title: 'Покакать', isDone: true },
    ]

    const deleteAllTasks = () => {
        console.log("Delete all tasks");
    }

    const deleteTask = (taskId) => {
        console.log(`Delete task with id ${taskId}`);
    }

    const toggleTaskComplete = (taskId, isDone) => {
        console.log(`Task with id ${taskId} ${isDone ? 'complete' : 'nocap'}`);
    }

    const filterTasks = (query) => {
        console.log(`search: ${query}`);
    }

    const addTask = () => {
        console.log('task added');
    }

    return (
        <div className="todo">
            <h1 className="todo__title">To Do List</h1>
            <AddTaskForm addTask={addTask} />
            <SearchTaskForm onSearchInput={filterTasks} />
            <TodoInfo 
                total={tasks.length} 
                done={tasks.filter(({ isDone }) => isDone).length}
                onDeleteAllButtonClick={deleteAllTasks}
            />
            <TodoList 
                tasks={tasks}
                onDeleteTaskButtonClick={deleteTask}
                onTaskCompleteChange={toggleTaskComplete}
            />
        </div>
    )
}

export default Todo