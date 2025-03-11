import { useRecoilState, useRecoilValue } from "recoil";
import { categoryAtom, todoSelector } from "../atom";
import AddTodo from "./AddTodo";
import Todo from "./Todo";
import { FormEvent } from "react";

export default function TodoList() {
    const [category, setCategory] = useRecoilState(categoryAtom);
    const todoList = useRecoilValue(todoSelector);
    console.log(todoList);
    const handleChange = (e: FormEvent<HTMLSelectElement>) => {
        setCategory(e.currentTarget.value);
    };
    return (
        <div>
            <h1>TodoList</h1>
            <select value={category} onChange={handleChange}>
                <option value="TO_DO">TO DO</option>
                <option value="DOING">DOING</option>
                <option value="DONE">DONE</option>
            </select>
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
