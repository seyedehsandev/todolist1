import React, { useEffect, useState } from 'react';
import Input from './Input.tsx';
import Todo from './Todo.tsx';
import Completed from './Completed.tsx';
// import swal from "sweetalert";


interface TodoItem {
  title: string;
  description: string;
  completedOn?: string;
}

function TodosWrapper() {
  const [allTodos, setAllTodos] = useState<TodoItem[]>([]);
  const [completedTodos, setCompletedTodos] = useState<TodoItem[]>([]);
  const [isCompletedScreen, setIsCompletedScreen] = useState(false);

  const handleAddNewToDo = (title: string, description: string) => {
    const newTodo: TodoItem = {
      title,
      description,
    };
    setAllTodos([...allTodos, newTodo]);
    localStorage.setItem('todolist', JSON.stringify(allTodos));
  };

  useEffect(() => {
    const savedTodosRaw = localStorage.getItem('todolist');
    const savedCompletedToDosRaw = localStorage.getItem('completedTodos');

    const savedTodos = savedTodosRaw ? JSON.parse(savedTodosRaw) as TodoItem[] : [];
    const savedCompletedToDos = savedCompletedToDosRaw ? JSON.parse(savedCompletedToDosRaw) as TodoItem[] : [];

    if (savedTodos) {
      setAllTodos(savedTodos);
    }

    if (savedCompletedToDos) {
      setCompletedTodos(savedCompletedToDos);
    }
  }, []);

  const handleToDoDelete = (index: number) => {
    

    const reducedTodos = [...allTodos];
    reducedTodos.splice(index, 1);
    localStorage.setItem('todolist', JSON.stringify(reducedTodos));
    setAllTodos(reducedTodos);
  };

  const handleCompletedTodoDelete = (index: number) => {
    const reducedCompletedTodos = [...completedTodos];
    reducedCompletedTodos.splice(index, 1);
    localStorage.setItem('completedTodos', JSON.stringify(reducedCompletedTodos));
    setCompletedTodos(reducedCompletedTodos);
  };

  const handleComplete = (index: number) => {
    const date = new Date();
    const dd = date.getDate();
    const mm = date.getMonth() + 1;
    const yyyy = date.getFullYear();
    const hh = date.getHours();
    const minutes = date.getMinutes();
    const ss = date.getSeconds();
    const finalDate =
      dd +
      '-' +
      mm +
      '-' +
      yyyy +
      ' at ' +
      hh +
      ':' +
      minutes +
      ':' +
      ss;

    const filteredTodo: TodoItem = {
      ...allTodos[index],
      completedOn: finalDate,
    };

    const updatedCompletedList = [...completedTodos, filteredTodo];
    setCompletedTodos(updatedCompletedList);
    localStorage.setItem('completedTodos', JSON.stringify(updatedCompletedList));

    handleToDoDelete(index);
  };

  return (
    <div className="todo-wrapper">
      <Input newTodoHandler={handleAddNewToDo} />
      <div className="btn-area">
        <button
          className={`secondaryBtn ${!isCompletedScreen && 'active'}`}
          onClick={() => setIsCompletedScreen(false)}
        >
          To Do
        </button>
        <button
          className={`secondaryBtn ${isCompletedScreen && 'active'}`}
          onClick={() => setIsCompletedScreen(true)}
        >
          Completed
        </button>
      </div>
      <div className="todo-list">
        {isCompletedScreen === false &&
          allTodos.map((item, index) => (
            <Todo
              key={index}
              completer={handleComplete}
              deleter={handleToDoDelete}
              item={item}
              index={index}
            />
          ))}
        {isCompletedScreen === true &&
          completedTodos.map((item, index) => (
            <Completed
              key={index}
              deleter={handleCompletedTodoDelete}
              item={item}
              index={index}
            />
          ))}
      </div>
    </div>
  );
}

export default TodosWrapper;
