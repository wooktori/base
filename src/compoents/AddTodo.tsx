import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { todoAtom } from "../atom";

interface IForm {
  todo: string;
}

export default function AddTodo() {
  const setTodoList = useSetRecoilState(todoAtom);
  const { handleSubmit, register, setValue } = useForm<IForm>();
  const handleValid = ({ todo }: IForm) => {
    setTodoList((prev) => [
      { text: todo, id: Date.now(), category: "TO_DO" },
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
