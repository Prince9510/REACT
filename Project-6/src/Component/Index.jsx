import React, { useState,useEffect } from 'react'

export default function Index() {

    const [task, setTask] = useState("");
    const [record, setRecord] = useState([]);
    const [editindex, setEditIndex] = useState(null);

    useEffect(() => {
        let data = JSON.parse(localStorage.getItem("Task")) || [];
        setRecord(data);
    }, []);

    const handleAdd = () => {
        let user = { id: record.length + 1, task, status: "Pending" };
        let oldRecord = JSON.parse(localStorage.getItem("Task")) || [];

        if (editindex) {
            let updatedRecord = oldRecord.map((item) => {
                if (item.id === editindex) {


                    item.task = task;
                    return item;
                }
                return item;
            });
            localStorage.setItem("Task", JSON.stringify(updatedRecord));
            setRecord(updatedRecord);
            setEditIndex(null);
        } else {
            oldRecord.push(user);
            setRecord(oldRecord);
            localStorage.setItem("Task", JSON.stringify(oldRecord));
        }
        setTask("");
    };

    const handleDelete = (id) => {
        let deleteData = record.filter((item) => item.id !== id);
        setRecord(deleteData);
        localStorage.setItem("Task", JSON.stringify(deleteData));
    };

    const handleEdit = (id) => {
        let singleData = record.find((item) => item.id === id);
        setTask(singleData.task);
        setEditIndex(id);
    };

    const handleComplete = (id) => {
      let updatedRecord = record.map((item) => {
          if (item.id === id) {
              item.status = "Complete"; 
          }
          return item;
      });

        setRecord(updatedRecord);
        localStorage.setItem("Task", JSON.stringify(updatedRecord));
    };

  return (
    
    <div className="container">
  <div className="todo-header">Task Manager</div>
  <div className="input-group mb-3">
    <input type="text" value={task} className="form-control" placeholder="Add New Task" aria-label="Add New Task" onChange={(e) => setTask(e.target.value)}/>
    <button className="btn add-task-btn" onClick={handleAdd}>
    {editindex ? "Update" : "Add"}
    </button>
  </div>
  <table className="todo-table table">
    <thead>
      <tr>
        <th>ID</th>
        <th>Task</th>
        <th>Status</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
        {
            record
            ? record.map((e,i)=>{
                return (
                    <tr key={i}>
        <td>{e.id}</td>
        <td>{e.task}</td>
        <td>{e.status}</td>
        <td>
          <button className="btn btn-action btn-primary" onClick={() => handleEdit(e.id)}>Edit</button>
          <button className="btn btn-action btn-danger"  onClick={() => handleDelete(e.id)}>Delete</button>
          <button className="btn btn-action btn-success" onClick={() => handleComplete(e.id)}>Complete</button>
        </td>
      </tr>
                )
            })
            : ""

        }
      
    </tbody>
  </table>
</div>
  )
}
