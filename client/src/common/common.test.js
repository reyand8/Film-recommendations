import theme from '../assets/theme';
import {changeColor, getVoteCicle} from './common';


describe('validate change color', () => {
    test('Vote is more than 66.67', () => {
        expect(changeColor(88.67)).toBe( theme.palette.success.main);
    });
    test('Vote is 66.67', () => {
        expect(changeColor(66.67)).toBe(theme.palette.success.main);
    });
    test('Vote is more than 33.34 and less than 66.67', () => {
        expect(changeColor(44.43)).toBe(theme.palette.warning.light);
    });
    test('Vote is 33.34', () => {
        expect(changeColor(33.34)).toBe(theme.palette.warning.light);
    });
    test('Vote is less than 33.34', () => {
        expect(changeColor(5)).toBe(theme.palette.error.light);
    });
});

describe('validate vote toFixed', () => {
    test('Vote is 100', () => {
        expect(getVoteCicle(100)).toBe('100.0');
    });
    test('Vote is less than 100', () => {
        expect(getVoteCicle(88.67)).toBe('88.7');
    });
    test('Vote is more than 100', () => {
        expect(getVoteCicle(105)).toBeUndefined();
    });
});