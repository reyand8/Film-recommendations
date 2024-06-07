export const saveIdsToStorage = (name, date) => {
    if (!window || !window.localStorage) {
        return;
    }
    const arrayId = JSON.parse(window.localStorage.getItem(name)) || [];
    if (Array.isArray(date)) {
        date.forEach(el => {
            if (!arrayId.includes(el)) {
                arrayId.push(el);
            }
        });
    }
    if (!arrayId.includes(date) && !Array.isArray(date) ) {
        arrayId.push(date);
    }
    window.localStorage.setItem(name, JSON.stringify(arrayId));
};

export const deleteIdsFromStorage = (name, date) => {
    if (!window || !window.localStorage) {
        return;
    }
    const arrayId = JSON.parse(window.localStorage.getItem(name));
    const filterArray = arrayId.filter(item => item !== date);
    window.localStorage.setItem(name, JSON.stringify(filterArray));
};

export const saveToStorage = (name, date) => {
    if (!window || !window.localStorage) {
        return;
    }
    window.localStorage.setItem(name, JSON.stringify(date));
};

export const getFromStorage = (name) => {
    if (!window || !window.localStorage) {
        return null;
    }
    try {
        return JSON.parse(window.localStorage.getItem(name));
    } catch (e) {
        console.error(e);
        return null;
    }
};