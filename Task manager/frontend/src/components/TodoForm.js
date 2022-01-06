import axios from "axios";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";
function TodoForm() {
  const link = "/api/v1/crud";
  const [todos, setTodos] = useState([]);
  const [todoName, setTodoName] = useState("");
  const [todoComment, setTodoComment] = useState("");
  const [editTodoData, setEditTodoData] = useState(null);

  useEffect(() => {
    getTodos();
  }, []);

  useEffect(() => {
    if (editTodoData) {
      setTodoName(editTodoData.name ? editTodoData.name : "");
      setTodoComment(editTodoData.name ? editTodoData.comment : "");
    }
  }, [editTodoData]);

  //reding data
   function getTodos() {
     axios.get(link).then((response)=>{
      setTodos(response.data.crud);

    })

  }

  const editTodos = (todosData) => {
    setEditTodoData(todosData);
  };

  //adding
  async function addTodos(e) {
    e.preventDefault();
    const todoData = {
      name: todoName ? todoName : undefined,
      comment: todoComment ? todoComment : undefined,
    };

    if (!editTodoData) {
      await axios.post(link, todoData);
    } else {
      //update the data
      await axios.patch(`/api/v1/crud/${editTodoData._id}`, todoData);
    }
    setTodoName("");
    setTodoComment("");
    getTodos();
    setEditTodoData("");
  }

  const renderTodos = () => {
    let sortedTodos = [...todos];
    sortedTodos = sortedTodos.sort((a, b) => {
      return new Date(b.createdAt) - new Date(a.createdAt);
    });

    return sortedTodos.map((todo, i) => {
      return (
        <TodoItem
          key={i}
          todo={todo}
          getTodos={getTodos}
          editTodos={editTodos}
        />
      );
    });
  };

  const insertTodos = () => {
    return (
      <div className="Texteditor">
        <form onSubmit={addTodos}>
          <div className="input-control">
            <input
              type="text"
              name=""
              id="name"
              placeholder="Task Name"
              value={todoName}
              onChange={(e) => setTodoName(e.target.value)}
              required
            />
          </div>
          <div className="input-control">
            <textarea
              name=""
              id="comment"
              cols="30"
              rows="5"
              value={todoComment}
              placeholder="Enter Task"
              onChange={(e) => setTodoComment(e.target.value)}
            ></textarea>
          </div>
          <button className="submit-btn">Add Task</button>
        </form>
      </div>
    );
  };

  return (
    <TodoFormStyled>
      {insertTodos()}
      {renderTodos()}
    </TodoFormStyled>
  );
}

const TodoFormStyled = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  flex-direction: column;
  .Texteditor {
    width: 60%;
    form {
      padding-bottom: 5rem;
      .submit-btn {
        padding: 0.5rem 1rem;
        outline: none;
        cursor: pointer;
        background-color: #688e92;
        border: none;
        border-radius: 34px;
        color: white;
      }
    }
  }
`;

export default TodoForm;
