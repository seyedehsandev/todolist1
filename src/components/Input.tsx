import React, { useState } from 'react';

interface InputProps {
  newTodoHandler: (title: string, desc: string) => void;
}

function Input({ newTodoHandler }: InputProps) {
  const [newTitle, setNewTitle] = useState('');
  const [newDesc, setNewDesc] = useState('');

  const handleAddNewToDo = () => {
    if (newTitle) {
      newTodoHandler(newTitle, newDesc);
      console.log("newtitle: " + newTitle + "| newdesc: " + newDesc);

      setNewTitle('');
      setNewDesc('');
    }
  };

  return (
    <div className="todo-input">
      <div className="todo-input-item">
        <label>Title:</label>
        <input
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          placeholder="What's the title of your To Do?"
        />
      </div>
      <div className="todo-input-item">
        <label>Description:</label>
        <input
          type="text"
          value={newDesc}
          onChange={(e) => setNewDesc(e.target.value)}
          placeholder="What's the description of your To Do?"
        />
      </div>
      <div className="todo-input-item">
        <button
          className="primary-btn"
          type="button"
          onClick={handleAddNewToDo}
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default Input;


// import React , {useState} from 'react'

// function Input({newTodoHandler}) {

//     const [newTitle , setNewTitle] = useState("")
//     const [newDesc , setNewDesc] = useState("")

//     const handleAddNewToDo = ()=>{

//         if (newTitle){

//             newTodoHandler(newTitle , newDesc)
//             console.log( "input component // "+"newtitle: " + newTitle + "| newdesc: " + newDesc)

//             setNewTitle("")
//             setNewDesc("")
//         }

//     }


  
//   return (

//     <div className="todo-input">
//     <div className="todo-input-item">
//       <label>Title:</label>
//       <input
//         type="text"
//         value={newTitle}
//         onChange={e => setNewTitle (e.target.value)}
//         placeholder="What's the title of your To Do?"
//       />
//     </div>
//     <div className="todo-input-item">
//       <label>Description:</label>
//       <input
//         type="text"
//         value={newDesc}
//         onChange={e => setNewDesc (e.target.value)}
//         placeholder="What's the description of your To Do?"
//       />
//     </div>
//     <div className="todo-input-item">
//       <button
//         className="primary-btn"
//         type="button"
//         onClick={handleAddNewToDo}
//       >
//         Add
//       </button>
//     </div>
//   </div>
//   )
// }

// export default Input