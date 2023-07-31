import { userReducer } from './userReducer';
import { addUser } from '../actions/userActions';

describe('userReducer', () => {
    test('adds a user to the store', () => {
        const initialState = {
            users: [],
        };

        const user = {
            firstName: 'John',
            lastName: 'Doe',
            email: 'john.doe@example.com',
            message: 'Hello, World!'
        };

        const action = addUser(user);
        const newState = userReducer(initialState, action);

        expect(newState.users).toEqual([user]);
    });
});