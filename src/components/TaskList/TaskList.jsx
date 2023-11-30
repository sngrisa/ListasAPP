import React from 'react';
import "./TaskList.scss";
import TaskItem from '../TaskItem/TaskItem';

const TaskList = ({ list, setList }) => {


    const onChangeStatus = (event) => {
        const { name, checked } = event.target;
        setList(list.map(item => ({
            ...item,
            done: item.id === name ? checked : item.done
        })));
    };

    const onClickRemoveItem = (event) => {
        setList(list.filter(item => !item.done));
    };

    return (
        <>
            <div className="todo-list">
                {list.length ? list.map((item) => <TaskItem key={item.id} data={item} onChange={onChangeStatus} />) : <div className='notification is-danger has-text-centered'><i className="fa fa-exclamation-triangle"></i> Empty List</div>}
                {list.length ? (
                    <p>
                        <button className="button is-danger is-fullwidth" onClick={onClickRemoveItem}>
                        <i className="fa fa-solid fa-eraser"></i> <b className='ml-3'>Delete all done</b>
                        </button>
                    </p>
                ) : null}
            </div>
        </>
    )
}

export default TaskList;