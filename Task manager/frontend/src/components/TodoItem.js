import React from "react";
import styled from "styled-components";
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import axios from 'axios'
function TodoItem({ todo,getTodos,editTodos}) {
  const id = todo._id
  const deleteTodo = (id) => {
     axios.delete(`/api/v1/crud/${id}`).then(()=>{
       getTodos()
     })
    

  };
  return (
    <TodoItemStyled>
      <div className="icon-document"></div>
      <div className="text-con">
        <div className="left-text">
          <p>Task Name</p>
          <h4>{todo.name}</h4>
        </div>
        <div className="right-text">
          <p>Task</p>
          <h4>{todo.comment}</h4>
        </div>
      </div>
      <div className="edit" onClick={() => editTodos(todo)}>
        <FaEdit color="blue" />
      </div>
      <div className="delete" onClick={()=>deleteTodo(id)}>
        <FaTrashAlt color="red" />
      </div>
    </TodoItemStyled>
  );
}
const TodoItemStyled = styled.div`
  background-color: #4f6877;
  padding: 1rem;
  margin: 1rem;
  width: 100%;
  border-radius: 30px;
  display: flex;
  justify-content: space-between;
  color: #6b8e92;
  &:last-child {
    margin-bottom: 4rem;
  }
  h4 {
    color: white;
  }

  .edit,
  .delete {
    background-color: white;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;
  }
 
  .text-con {
    flex: 3;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding: 0 3rem;
    .right-text {
      flex: 2;
      padding-left: 4rem;
    }
  }
  .edit {
    margin-right: 1rem;
  }
`;

export default TodoItem;
