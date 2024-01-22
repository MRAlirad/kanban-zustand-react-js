import {create} from "zustand";

const store = (set) => ({
    tasks: [{id: 523456, title: 'TestTask', state: 'PLANNED'}]
});

export const useStore = create(store);