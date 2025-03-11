import { FormEvent } from "react";
import { useRecoilState } from "recoil";
import { Categories, categoryAtom } from "../atom";

export default function SelectTodo() {
    const [category, setCategory] = useRecoilState(categoryAtom);

    const handleChange = (e: FormEvent<HTMLSelectElement>) => {
        setCategory(+e.currentTarget.value);
    };
    return (
        <select value={category} onChange={handleChange}>
            <option value={Categories.TO_DO}>TO DO</option>
            <option value={Categories.DOING}>DOING</option>
            <option value={Categories.DONE}>DONE</option>
        </select>
    );
}
