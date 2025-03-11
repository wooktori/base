import { useRecoilValue } from "recoil";
import { todoSelector } from "../atom";
import AddTodo from "./AddTodo";
import Todo from "./Todo";
import SelectTodo from "./SelectTodo";

export default function TodoList() {
    const todoList = useRecoilValue(todoSelector);

    return (
        <div>
            <h1>TodoList</h1>
            <SelectTodo />
            <AddTodo />
            <ul>
                {todoList?.map((todo) => (
                    <Todo key={todo.id} {...todo} />
                ))}
            </ul>
            <hr />
        </div>
    );
}
