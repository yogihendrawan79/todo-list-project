import React, { useState } from "react";

import Navbar from "./components/Navbar";
import ToDoItem from "./components/ToDoItem";

const App = () => {
  const [task, setTask] = useState("");
  const [taskLists, setTaskLists] = useState([]);

  const handleAddTask = () => {
    setTaskLists([...taskLists, task]);
    setTask("");
  };

  const doneTask = (index) => {
    let tempTaskLists = [...taskLists];
    tempTaskLists.splice(index, 1);
    setTaskLists(tempTaskLists);
  };

  return (
    <>
      <Navbar />
      <div className="flex place-content-center">
        <div className="card w-96 bg-base-100 shadow-xl mb-10">
          <div className="card-body">
            <h2 className="card-title">Insert Your To-Do List</h2>
            <div className="form-control">
              <div className="input-group">
                <input
                  type="text"
                  placeholder="Input Your To-Do List Here..."
                  className="input input-bordered w-full"
                  onChange={(text) => setTask(text.target.value)}
                  value={task}
                />
                <button
                  className="btn btn-square bg-blue-300"
                  onClick={() => handleAddTask()}
                >
                  ADD
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content">
        {taskLists.length > 0 ? (
          taskLists.map((task, index) => {
            return (
              <ToDoItem
                key={index}
                task={task}
                onClick={() => doneTask(index)}
              />
            );
          })
        ) : (
          <div className="flex place-content-center">
            <p>
              <i>You haven't create to-do list yet.</i>
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default App;
