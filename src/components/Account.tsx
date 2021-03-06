import axios, { AxiosResponse } from 'axios';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RouteChildrenProps } from 'react-router';

import Button from './Button';

import { RootState } from '../redux/store';

import { User } from 'customTypes';

const Account: React.FC<RouteChildrenProps> = (props: RouteChildrenProps) => {
    const user = useSelector((state: RootState) => state.userReducer)

    const [username, setUsername] = useState<string>(user.username);
    const [email, setEmail] = useState<string>(user.email);
    const [password, setPassword] = useState<string>('password');

    const [isEditingUsername, setIsEditingUsername] = useState<boolean>(false);
    const [isEditingEmail, setIsEditingEmail] = useState<boolean>(false);
    const [isEditingPassword, setIsEditingPassword] = useState<boolean>(false);

    const [isDeleting, setIsDeleting] = useState<boolean>(false);

    const dispatch = useDispatch();

    const captureCurrentUser = (): void => {
        setUsername(user.username);
        setEmail(user.email);
        setPassword('password');
    }

    useEffect((): void => {
        captureCurrentUser();
    }, [user]);

    const toggleEditUsername = (): void => {
        setIsEditingUsername(!isEditingUsername);
    };
    const toggleEditEmail = (): void => {
        setIsEditingEmail(!isEditingEmail);
    };
    const toggleEditPassword = (): void => {
        setIsEditingPassword(!isEditingPassword);
    };
    const toggleDelete = (): void => {
        setIsDeleting(!isDeleting);
    };

    const setEditing = (): void => {
        setIsEditingUsername(false);
        setIsEditingEmail(false);
        setIsEditingPassword(false);
    };

    const saveChanges = (param: string): void => {
        let body = null;
        switch (param) {
            case 'username':
                body = { username: username };
                break;
            case 'email':
                body = { email: email };
                break;
            case 'password':
                body = { password: password }
                break;
        }
        axios.put(`api/user/${param}`, body)
            .then(async (res: AxiosResponse<User>): Promise<void> => {
                const user = res.data;
                dispatch({ type: 'UPDATE_USER', payload: user });
                setEditing();
            })
            .catch((error) => console.log(error))
    };

    const confirmDelete = (): void => {
        axios.delete('/api/user/delete')
            .then(() => {
                props.history.push('/');
            })
            .catch((error) => console.log(error))
    };

    const cancelChanges = (): void => {
        setUsername(user.username);
        setEmail(user.email);
        setPassword(password);
    };

    return (
        <div className='account'>
            <form className='outerForm'>
                <div>
                    <h3>My Account</h3>
                    {!isEditingUsername ? (
                        <section className='editContainer'>
                            <p>username: {username}</p>
                            <button onClick={toggleEditUsername}>edit</button>
                        </section>
                    ) : (
                        <form
                            onSubmit={(e: React.SyntheticEvent) => {
                                e.preventDefault();
                            }}
                        >
                            <p>username:</p>
                            <input
                                value={username}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>): void => setUsername(e.target.value)}
                            />
                            <button onClick={(): void => saveChanges('username')}>save</button>
                            <button onClick={(): void => { cancelChanges(); toggleEditUsername(); }}>cancel</button>
                        </form>
                    )}
                    {!isEditingEmail ? (
                        <section className='editContainer'>
                            <p>email: {email}</p>
                            <button onClick={toggleEditEmail}>edit</button>
                        </section>
                    ) : (
                        <form
                            onSubmit={(e: React.SyntheticEvent) => {
                                e.preventDefault();
                            }}
                        >
                            <p>email:</p>
                            <input
                                value={email}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>): void => setEmail(e.target.value)}
                            />
                            <button onClick={(): void => saveChanges('email')}>save</button>
                            <button onClick={(): void => { cancelChanges(); toggleEditEmail(); }}>cancel</button>
                        </form>
                    )}
                    {!isEditingPassword ? (
                        <section className='editContainer'>
                            <p>password: {password}</p>
                            <button onClick={toggleEditPassword}>edit</button>
                        </section>
                    ) : (
                        <form
                            onSubmit={(e: React.SyntheticEvent) => {
                                e.preventDefault();
                            }}
                        >
                            <p>password:</p>
                            <input
                                type='password'
                                value={password}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>): void => setPassword(e.target.value)}
                            />
                            <button onClick={(): void => saveChanges('password')}>save</button>
                            <button onClick={(): void => { cancelChanges(); toggleEditPassword(); }}>cancel</button>
                        </form>
                    )}
                </div>
                {!isDeleting ? (
                    <>
                        <Button onClick={toggleDelete}>delete</Button>
                    </>
                ) :
                    (
                        <div>
                            <p>Are you sure you wish to delete your account?</p>
                            <button onClick={confirmDelete}>confirm</button>
                            <button onClick={toggleDelete}>&#10005;</button>
                        </div>
                    )}
            </form>
        </div>
    )
}

export default Account;