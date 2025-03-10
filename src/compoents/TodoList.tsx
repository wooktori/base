import { useRecoilValue } from "recoil";
import { todoAtom } from "../atom";
import AddTodo from "./AddTodo";
import Todo from "./Todo";

export default function TodoList() {
  const todoList = useRecoilValue(todoAtom);

  return (
    <div>
      <h1>TodoList</h1>
      <AddTodo />
      <ul>
        {todoList.map((todo) => (
          <Todo key={todo.id} {...todo} />
        ))}
      </ul>
    </div>
  );
}
