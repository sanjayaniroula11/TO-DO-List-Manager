import React, { useState } from "react";
import "./App.css";
import { MdDeleteForever } from "react-icons/md";

function App() {
  const [input, setInput] = useState('');
  const [items, setItems] = useState([]);

  const taskName = (e) => {
    setInput(e.target.value);
  };

  const putItem = () => {
    setItems((prevItems)=>{
      return [...prevItems, input];
    })
    setInput('');

  };

  return (
    <>
      <div className="todo">
        <div className="todo-main">
          <h1>Write Your Tasks Below</h1>
          <input
            type="text"
            name="addTask"
            id="addTask"
            placeholder="add a task"
            value={input}
            onChange={taskName}
          />
          <button className="submit" onClick={putItem}>+</button>
          <div className="all-tasks">
            <ul>
              {/* <li>{input} <button className='delete' onClick={putItem}><MdDeleteForever/></button></li> */}

              {items.map((itemValue) => {
                return (

                  <li>
                    {itemValue}
                    <button className="delete" >
                      <MdDeleteForever />
                    </button>
                  </li>

                );
              })}


            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
