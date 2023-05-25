const LS_KEY = 'taskList';

export const saveList = (taskList) => {
    localStorage.setItem(LS_KEY, JSON.stringify(taskList));
};

export const loadList = (taskList) => {
    const savedList = localStorage.getItem(LS_KEY);
    return savedList ? JSON.parse(savedList) : [];
};