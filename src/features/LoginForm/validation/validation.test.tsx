import {validateEmail, validatePassword} from "./validation";
import '@testing-library/jest-dom';

describe('validateEmail', () => {
    test('returns empty string for valid email', () => {
        expect(validateEmail('test@example.com')).toBe('');
    });

    test('returns error message for invalid email', () => {
        expect(validateEmail('test')).toBe('Invalid email address');
        expect(validateEmail('test@')).toBe('Invalid email address');
        expect(validateEmail('test@example')).toBe('Invalid email address');
        expect(validateEmail('test@example.')).toBe('Invalid email address');
    });

    test('handles empty and null values', () => {
        expect(validateEmail('')).toBe('Invalid email address');
        expect(validateEmail(null)).toBe('Invalid email address');
    });

    test('is case insensitive', () => {
        expect(validateEmail('TEST@EXAMPLE.COM')).toBe('');
    });
});

describe('validatePassword', () => {
    test('returns empty string for valid password', () => {
        expect(validatePassword('123456')).toBe('');
        expect(validatePassword('password')).toBe('');
    });

    test('returns error message for password shorter than 6 characters', () => {
        expect(validatePassword('12345')).toBe('Password must be at least 6 characters');
    });

    test('handles empty and null values', () => {
        expect(validatePassword('')).toBe('Password must be at least 6 characters');
        expect(validatePassword(null)).toBe('Password must be at least 6 characters');
    });
});
