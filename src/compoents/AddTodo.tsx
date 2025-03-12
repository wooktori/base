import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { categoryAtom, todoAtom } from "../atom";

interface IForm {
    todo: string;
}

export default function AddTodo() {
    const setTodoList = useSetRecoilState(todoAtom);
    const category = useRecoilValue(categoryAtom);
    const { handleSubmit, register, setValue } = useForm<IForm>();
    const handleValid = ({ todo }: IForm) => {
        setTodoList((prev) => [
            { text: todo, id: Date.now(), category: category },
            ...prev,
        ]);
        setValue("todo", "");
    };
    return (
        <form onSubmit={handleSubmit(handleValid)}>
            <input
                {...register("todo", {
                    required: "Please write a To Do",
                })}
                placeholder="Write a to do"
            />
            <button>Add</button>
        </form>
    );
}
