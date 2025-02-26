export const setItemToLocalStorage = (key: string, value: string): void => {
    localStorage.setItem(key, value);
};

export const getItemFromLocalStorage = (key: string) => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
};

export const removeItemFromLocalStorage = (key: string): void => {
    localStorage.removeItem(key);
};
