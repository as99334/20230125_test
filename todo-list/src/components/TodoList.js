import React from "react";
import styled from "styled-components";
import { useTodoState } from "../todoState";
import TodoItem from "./TodoItem";

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-x: auto;
`;

function TodoList() {
  const todos = useTodoState();

  return (
    <TodoListBlock>
      {todos.map((todo) => (
        <TodoItem id={todo.id} done={todo.done} text={todo.text} />
      ))}
    </TodoListBlock>
  );
}

export default TodoList;
