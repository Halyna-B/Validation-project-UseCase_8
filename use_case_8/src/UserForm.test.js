import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { userReducer } from './redux/reducers/userReducer';
import { UserForm } from './UserForm';


describe('UserForm', () => {

    global.alert = jest.fn();

    test('checks validation and submits the form', async () => {
        const store = createStore(userReducer);
        render(
            <Provider store={store}>
                <UserForm/>
            </Provider>
        );

        fireEvent.click(screen.getByText('Submit'));

        expect(screen.getByText('First name is required')).toBeInTheDocument();
        expect(screen.getByText('Last name is required')).toBeInTheDocument();
        expect(screen.getByText('Email is not valid')).toBeInTheDocument();
        expect(screen.getByText('Message is required')).toBeInTheDocument();

        // Now fill the fields and submit again
        fireEvent.change(screen.getByPlaceholderText('First Name'), {target: {value: 'John'}});
        fireEvent.change(screen.getByPlaceholderText('Last Name'), {target: {value: 'Doe'}});
        fireEvent.change(screen.getByPlaceholderText('Email'), {target: {value: 'john.doe@example.com'}});
        fireEvent.change(screen.getByPlaceholderText('Message'), {target: {value: 'Hello, World!'}});

        fireEvent.click(screen.getByText('Submit'));

        expect(screen.queryByText('First name is required')).not.toBeInTheDocument();
        expect(screen.queryByText('Last name is required')).not.toBeInTheDocument();
        expect(screen.queryByText('Email is not valid')).not.toBeInTheDocument();
        expect(screen.queryByText('Message is required')).not.toBeInTheDocument();

        const state = store.getState();
        expect(state.users).toEqual([
            {
                firstName: 'John',
                lastName: 'Doe',
                email: 'john.doe@example.com',
                message: 'Hello, World!'
            }
        ]);
    });
});