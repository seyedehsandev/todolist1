import React from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import { BsCheckLg } from 'react-icons/bs';

interface TodoProps {
  deleter: (index: number) => void;
  completer: (index: number) => void;
  item: { title: string; description: string };
  index: number;
}

function Todo({ deleter, completer, item, index }: TodoProps) {
  const handleToDoDelete = (index: number) => {
    deleter(index);
  };

  const handleComplete = (index: number) => {
    completer(index);
  };

  return (
    <div className="todo-list-item">
      <div>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </div>
      <div>
        <AiOutlineDelete
          title="Delete?"
          className="icon"
          onClick={() => handleToDoDelete(index)}
        />
        <BsCheckLg
          title="Completed?"
          className="check-icon"
          onClick={() => handleComplete(index)}
        />
      </div>
    </div>
  );
}

export default Todo;


