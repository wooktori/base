import { useSetRecoilState } from "recoil";
import { Categories, ITodo, todoAtom } from "../atom";

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
            {category !== Categories.TO_DO && (
                <button onClick={() => handleClick(Categories.TO_DO)}>
                    TO_DO
                </button>
            )}
            {category !== Categories.DOING && (
                <button onClick={() => handleClick(Categories.DOING)}>
                    DOING
                </button>
            )}
            {category !== Categories.DONE && (
                <button onClick={() => handleClick(Categories.DONE)}>
                    DONE
                </button>
            )}
        </div>
    );
}
