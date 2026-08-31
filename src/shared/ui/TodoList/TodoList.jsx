import { memo, useContext } from "react";

import TodoItem from "@/entities/todo/ui/TodoItem/"
import { TasksContext } from "@/entities/model/TasksContext";

const TodoList = (props) => {
    const { styles } = props

    const { tasks, filteredTasks } = useContext(TasksContext)

    const hasTasks = tasks.length > 0
    const isEmptyFilterTasks = filteredTasks?.length === 0

    if(!hasTasks) {
        return <div className={styles.emptyMessage}>There ara no tasks yet</div>
    }

    if(hasTasks && isEmptyFilterTasks) {
        return <div className={styles.emptyMessage}>Tasks not found</div>
    }

    return (
        <ul className={styles.list}>
            {(filteredTasks ?? tasks).map((task) => (
                <TodoItem 
                    key={task.id}
                    className={styles.item}
                    {...task}
                />
            ))}
        </ul>
    )
}

export default memo(TodoList)