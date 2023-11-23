import React from 'react';
import { AiOutlineDelete } from 'react-icons/ai';

interface CompletedProps {
  deleter: (index: number) => void;
  item: {
    title: string;
    description: string;
    completedOn?: string;
  };
  index: number;
}

const Completed: React.FC<CompletedProps> = ({ deleter, item, index }) => {
  const handleCompletedTodoDelete = (index: number) => {
    deleter(index);
  };

  return (
    <div className="todo-list-item" key={index}>
      <div>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <p>
          <i>Completed at: {item.completedOn}</i>
        </p>
      </div>
      <div>
        <AiOutlineDelete
          className="icon"
          onClick={() => handleCompletedTodoDelete(index)}
        />
        {/* ... */}
      </div>
    </div>
  );
};

export default Completed;
