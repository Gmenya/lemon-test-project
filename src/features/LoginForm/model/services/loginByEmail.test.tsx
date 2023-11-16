import axios from 'axios';
import {loginByEmail} from "./loginByEmail";

jest.mock('axios', () => ({
    post: jest.fn(() => Promise.resolve({ data: {} })),
}));
const mockAxios = axios as jest.Mocked<typeof axios>;

describe('loginByEmail function', () => {
    test('should make a successful login request', async () => {
        mockAxios.post.mockResolvedValueOnce({ data: {} });

        const credentials = {
            email: 'test@example.com',
            password: 'testPassword',
            isChecked: true,
        };
        const result = await loginByEmail(credentials);
        expect(axios.post).toHaveBeenCalledWith(
            `${process.env.REACT_APP_API_URL}/login`,
            credentials
        );

    });

    test('should handle login request failure', async () => {
        mockAxios.post.mockRejectedValueOnce(new Error('Failed to login'));

        const credentials = {
            email: 'test@example.com',
            password: 'testPassword',
            isChecked: true,
        };

        try {
            await loginByEmail(credentials);
        } catch (error) {
            expect(error.message).toEqual('Failed to login');
        }
    });
});
