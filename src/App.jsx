import React, { useState } from "react";
import "./App.css";
import { MdDeleteForever } from "react-icons/md";
import TodoMain from "./components/TodoMain";

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
const deleteTask = (id) => {
  setItems((prevItems) => {
    return prevItems.filter((_arrElement, index) => {
      return index !== id;
    });
  });
};


  return (
    <>
      <div className="todo">
        <div className="todo-main">
          <h1>To-Do List</h1>
          <input
            type="text"
            name="addTask"
            id="addTask"
            placeholder="Add a task"
            value={input}
            onChange={taskName}
          />
          <button className="submit" onClick={putItem}>+</button>
          <div className="all-tasks">
            <ul>
              {/* <li>{input} <button className='delete' onClick={putItem}><MdDeleteForever/></button></li> */}

              {items.map((itemValue, index) => {
                return (

                 <TodoMain key={index} id={index} text= {itemValue} onSelect={deleteTask} />

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
