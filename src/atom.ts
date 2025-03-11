import { atom, selector } from "recoil";

export enum Categories {
    "TO_DO",
    "DOING",
    "DONE",
}

export interface ITodo {
    text: string;
    id: number;
    category: Categories;
}

export const todoAtom = atom<ITodo[]>({
    key: "todo",
    default: [],
});

export const categoryAtom = atom({
    key: "category",
    default: Categories.TO_DO,
});

export const todoSelector = selector({
    key: "todoSelector",
    get: ({ get }) => {
        const todos = get(todoAtom);
        const category = get(categoryAtom);
        return todos.filter((todo) => todo.category === category);
    },
});
