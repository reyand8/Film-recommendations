export const saveToStorage = (name, date) => {
    if (!window || !window.localStorage) {
        return;
    }
    window.localStorage.setItem(name, JSON.stringify(date))
}

export const getFromStorage = (name) => {
    if (!window || !window.localStorage) {
        return null;
    }
    try {
        return JSON.parse(window.localStorage.getItem(name))
    } catch (e) {
        console.error(e)
        return null;
    }
}