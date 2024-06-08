import {
    saveIdsToStorage,
    deleteIdsFromStorage,
    saveToStorage,
    getFromStorage,
} from './localStorage';

describe('should save ids to storage', () => {
    beforeEach(() => {
        window.localStorage.clear();
    });

    test('should save single id to storage', () => {
        const name = 'test';
        const id = '1';
        saveIdsToStorage(name, id);
        expect(JSON.parse(window.localStorage.getItem(name))).toEqual([id]);
    });

    test('should save array of ids to storage', () => {
        const name = 'test';
        const ids = ['123', '456', '789'];
        saveIdsToStorage(name, ids);
        expect(JSON.parse(window.localStorage.getItem(name))).toEqual(ids);
    });

    test('should not save duplicate', () => {
        const name = 'test';
        const id = '1';
        saveIdsToStorage(name, id);
        saveIdsToStorage(name, id);
        expect(JSON.parse(window.localStorage.getItem(name))).toEqual([id]);
    });
});

describe('should delete ids from storage', () => {
    beforeEach(() => {
        window.localStorage.clear();
    });

    test('should delete id from storage', () => {
        const name = 'test';
        const id = '1';
        saveIdsToStorage(name, id);
        deleteIdsFromStorage(name, id);
        expect(JSON.parse(window.localStorage.getItem(name))).toEqual([]);
    });
});

describe('should save to storage', () => {
    beforeEach(() => {
        window.localStorage.clear();
    });

    test('should save data to storage', () => {
        const name = 'test';
        const data = {item: 'newItem'};
        saveToStorage(name, data);
        expect(JSON.parse(window.localStorage.getItem(name))).toEqual(data);
    });
});

describe('get from storage', () => {
    beforeEach(() => {
        window.localStorage.clear();
    });

    test('should get data from storage', () => {
        const name = 'test';
        const data = {item: 'newItem'};
        saveToStorage(name, data);
        expect(getFromStorage(name)).toEqual(data);
    });
});