import {create} from "zustand";

const store = (set) => ({
    tasks: [{title: 'TestTask', state: 'PLANNED'}],
    addTask: (title, state) => set((store) => ({tasks: [...store.tasks, {title, state}]})),
    deleteTask: (title) => set((store) => ({tasks: store.tasks.filter(task => task.title !== title)})),
});

export const useStore = create(store);