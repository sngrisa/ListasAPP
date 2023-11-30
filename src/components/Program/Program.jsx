import React, { useEffect, useState } from 'react';
import "./Program.scss";
import TaskList from "./../TaskList/TaskList";
import TaskForm from '../TaskForm/TaskForm';

const Program = () => {

    let [list, setList] = useState([]);

    useEffect(()=>{
        setList(JSON.parse(localStorage.getItem('taskList')))
    },[])

    let submitChanges = () =>{
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Task Added to List",
            showConfirmButton: false,
            timer: 1500
          });
    }

    let newTask = (newItem) => {
        submitChanges();
        setList([...list, newItem]);
        localStorage.setItem('taskList', JSON.stringify(list));
    }

    return (
        <div>
            <TaskForm newTask={newTask} />
            <TaskList setList={setList} list={list} />
        </div>
    )
}

export default Program;