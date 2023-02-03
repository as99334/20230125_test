import { createContext, useContext, useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "CREATE_TODO":
      return state.concat({ id: action.id, text: action.text, done: false });
    case "TOGGLE_TODO":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    case "REMOVE_TODO":
      return state.filter((todo) => todo.id !== action.id);
    default:
      return state;
  }
}

const state = [
  { id: 1, text: "밥먹기", done: true },
  { id: 2, text: "약먹기", done: false },
  { id: 3, text: "술먹기", done: false },
];

const TodoStateContext = createContext(null);
const TodoDispatchCotext = createContext(null);

export function TodoProvider({ children }) {
  const [todos, dispatch] = useReducer(reducer, state);

  return (
    <TodoStateContext.Provider value={todos}>
      <TodoDispatchCotext.Provider value={dispatch}>
        {children}
      </TodoDispatchCotext.Provider>
    </TodoStateContext.Provider>
  );
}

export function useTodoState() {
  const context = useContext(TodoStateContext);
  return context;
}

export function useTodoDispatch() {
  const context = useContext(TodoDispatchCotext);
  return context;
}
