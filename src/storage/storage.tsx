export const localStorageSet = (key: any, val: any) => {
    window.localStorage.setItem(key, val); 
}

export const localStorageGet = (key: any) => {
    return window.localStorage.getItem(key);
}
export const localStorageDelete = (key: any) => {
    return window.localStorage.removeItem(key);
}