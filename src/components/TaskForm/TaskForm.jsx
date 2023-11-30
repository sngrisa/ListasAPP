import React, { useState } from 'react';
import "./TaskForm.scss";

const TaskForm = ({ newTask }) => {

    let [description, setDescription] = useState("");

    let handleSubmit = (event) => {
        event.preventDefault();
        newTask({
            id: String(+new Date()),
            description,
            done: false,
        })
        setDescription("");
    }

    return (
        <>
            <form autoCapitalize='off' autoComplete='off' onSubmit={handleSubmit}>
                <div className='todo-list box'>
                    <div className='field'>
                        <label htmlFor='descriptionInput' className='label'><i className="fa fa-solid fa-paperclip ml-2 has-text-centered"></i> Description of Task:</label>
                        <hr></hr>
                        <div className='control has-icons-left has-icons-right'>
                            <input type='text' placeholder='Input the description of task' minLength={3}
                                onChange={(event) => setDescription(event.target.value)} id='descriptionInput'
                                name='descriptionInput' value={description} className='input' />
                            <span className="icon is-small is-left">
                                <i className="fa fa-tasks" aria-hidden="true"></i>
                            </span>
                        </div>
                        <hr></hr>
                        <div className='mt-5 mb-3'>
                            <button type='submit' className='button is-primary is-fullwidth'><i className="fa fa-calendar-plus-o" aria-hidden="true"></i> <b className='ml-3'>Add Task</b></button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}

export default TaskForm;