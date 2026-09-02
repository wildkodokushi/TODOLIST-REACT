import { useEffect, useState } from "react"

import tasksAPI from "@/shared/api/tasks"
import Button from '@/shared/ui/Button'

import styles from './TaskPage.module.scss'

const TaskPage = (props) => {
    const { params } = props
    const taskId = params.id

    const [task, setTask] = useState(null)
    const [isLoading, setIsloading] = useState(true)
    const [hasError, setHasError] = useState(false)

    useEffect(() => {
        tasksAPI.getById(taskId)
            .then((taskData) => {
                setTask(taskData)
                setHasError(false)
            })
            .catch(() => {
                setHasError(true)
            })
            .finally(() => {
                setIsloading(false)
            })
    }, [])

    if(isLoading) {
        return <div>Loading...</div>
    }

    if(hasError) {
        return <div>Task not found!</div>
    }

    return (
        <div className={styles.details}>
            <h1>{task.title}</h1>
            <p>{task.isDone ? 'Задача выполнена' : 'Задача не выполнена'}</p>
            <Button onClick={() => window.history.back()}>
                Вернуться на главную
            </Button>
        </div>
    )
}

export default TaskPage