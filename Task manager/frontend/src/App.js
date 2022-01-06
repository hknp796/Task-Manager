import TodoForm from "./components/TodoForm";
import styled from "styled-components";

function App() {
  return (
    <AppStyled>
      <div className="content-container">
        <TodoForm />
      </div>
    </AppStyled>
  );
}

const AppStyled = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
  .content-container {
    background-color: #374954;
    width: 80%;
    height: 80vh;
    border-radius: 20px;
    box-shadow: 10px 12px 20px rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    overflow-y: scroll;
    align-items: flex-start;
    ::-webkit-scrollbar {
      display: none;
    }
    form {
      input,
      textarea {
        width: 100%;
        padding: 0.7rem 1rem;
        font-family: inherit;
        outline: none;
        border: none;
        border-radius: 20px;
        margin: 1rem 0;
        background-color: #4f6877;
        color: white;
        ::placeholder {
          color: white;
          opacity: 1;
        }
      }
    }
  }
`;

export default App;
