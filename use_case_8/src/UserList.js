import React from 'react';
import { useSelector } from 'react-redux';
import './UserList.css';

export const UserList = () => {
    const users = useSelector(state => state.users);

    return (
        <table>
            <thead>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Message</th>
            </tr>
            </thead>
            <tbody>
            {users?.map(user => (
                <tr key={user.firstName}>
                    <td>{user.firstName}</td>
                    <td>{user.lastName}</td>
                    <td>{user.email}</td>
                    <td>{user.message}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
};
