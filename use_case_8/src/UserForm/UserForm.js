import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../redux/actions/userActions';
import validator from 'validator';
import './UserForm.css';

export const UserForm = () => {
    const dispatch = useDispatch();

    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
    });

    const [error, setError] = useState({
        firstName: false,
        lastName: false,
        email: false,
        message: false,
    });

    const handleInputChange = (event) => {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        });

        setError({
            ...error,
            [event.target.name]: false
        });
    };

    const validate = () => {
        const newErrors = {
            firstName: user.firstName.trim() === '',
            lastName: user.lastName.trim() === '',
            email: !validator.isEmail(user.email),
            message: user.message.trim() === ''
        };

        setError(newErrors);

        return !Object.values(newErrors).includes(true);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (validate()) {
            dispatch(addUser(user));
            alert('Data submitted successfully');

            setUser({
                firstName: '',
                lastName: '',
                email: '',
                message: '',
            });
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="firstName" placeholder="First Name" value={user.firstName} onChange={handleInputChange} />
            {error.firstName && <p>First name is required</p>}

            <input type="text" name="lastName" placeholder="Last Name" value={user.lastName} onChange={handleInputChange} />
            {error.lastName && <p>Last name is required</p>}

            <input type="email" name="email" placeholder="Email" value={user.email} onChange={handleInputChange} />
            {error.email && <p>Email is not valid</p>}

            <textarea name="message" placeholder="Message" value={user.message} onChange={handleInputChange} />
            {error.message && <p>Message is required</p>}

            <button type="submit">Submit</button>
        </form>
    );
};
