import { useContext, useMemo, useState } from "react"

import { TasksContext } from "@/entities/todo/model/TasksContext"
import Button from "@/shared/ui/Button"
import Field from "@/shared/ui/Field"

const AddTaskForm = (props) => {
    const { styles } = props

    const [newTaskTitle, setNewTaskTitle] = useState('')

    const { addTask, newTaskInputRef } = useContext(TasksContext)

    const clearNewTaskTitle = newTaskTitle.trim()
    const isNewTaskTitleEmpty = clearNewTaskTitle.length === 0

    const onSubmit = (event) => {
        event.preventDefault()

        if(!isNewTaskTitleEmpty && isNewTaskTitleEmpty <= 100) {
            addTask(
                clearNewTaskTitle,
                () => setNewTaskTitle('')
            )
        }
    }

    const error = useMemo(() => {
        const hasOnlySpaces = newTaskTitle.length > 0 && clearNewTaskTitle.length === 0
        const exceedsCharacterLimit = newTaskTitle.length > 100

        if(hasOnlySpaces) {
            return 'The task cannot be empty'
        }

        if(exceedsCharacterLimit) {
            return 'The task cannot exceed 100 characters!'
        }

        return ''

    }, [newTaskTitle, isNewTaskTitleEmpty])

    const onInput = (event) => {
        setNewTaskTitle(event.target.value)
    }

    const lettersLeft = clearNewTaskTitle.length
    const opacityValue = lettersLeft > 80 ? (lettersLeft - 75) / 20 : 0

    return (
        <form className={styles.form} onSubmit={onSubmit}>
            <span 
                className={styles.count}
                style={{
                    color: lettersLeft > 80 ? `rgba(255, 0, 0, ${opacityValue})` : undefined
                }}
            >
                {lettersLeft}/100
            </span>
            <Field 
                className={styles.field}
                label="New task title"
                id="new-task"
                value={newTaskTitle}
                error={error}
                onInput={onInput}
                ref={newTaskInputRef}
            />
            <Button 
                type="submit"
                isDisabled={isNewTaskTitleEmpty || error !== ''}
            >
                Add
            </Button>
        </form>
    )
}

export default AddTaskForm