import { useSetRecoilState } from "recoil";
import { ITodo, todoAtom } from "../atom";

export default function Todo({ text, category, id }: ITodo) {
  const setTodos = useSetRecoilState(todoAtom);
  const handleClick = (newCategory: ITodo["category"]) => {
    const newTodo = { text, category: newCategory, id };
    setTodos((prev) => {
      const index = prev.findIndex((todo) => todo.id === id);
      return [...prev.slice(0, index), newTodo, ...prev.slice(index + 1)];
    });
  };
  return (
    <div>
      <span>{text}</span>
      {category !== "TO_DO" && (
        <button onClick={() => handleClick("TO_DO")}>TO_DO</button>
      )}
      {category !== "DOING" && (
        <button onClick={() => handleClick("DOING")}>DOING</button>
      )}
      {category !== "DONE" && (
        <button onClick={() => handleClick("DONE")}>DONE</button>
      )}
    </div>
  );
}
