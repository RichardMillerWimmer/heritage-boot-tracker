import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';

import { User } from 'customTypes';

import Button from './Button';
import { RouteComponentProps } from 'react-router-dom';

const Register: React.FC<RouteComponentProps> = (props: RouteComponentProps) => {
    const [username, setUsername] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    // const [isError, setIsError] = useState<boolean>(false);
    // const [error, setError] = useState<string>('');


    const dispatch = useDispatch();

    const register = (): void => {
        axios.post<User>('/api/auth/register', { username, email, password })
            .then((res) => {
                const user = res.data;
                dispatch({ type: 'UPDATE_USER', payload: user });
                setUsername('');
                setEmail('');
                setPassword('');
                props.history.push('/');
            })
            .catch((error => {
                console.log(error)
                // setIsError(true);
                // setError(error)
            }))
    }


    return (
        <div className='register'>
            <form
                onSubmit={(e: React.SyntheticEvent) => {
                    e.preventDefault();
                    register();
                }}>
                <h3>Register</h3>
                <label htmlFor="registerUsername"></label>
                <input
                    id="registerUsername"
                    value={username}
                    placeholder="username"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>): void => setUsername(e.target.value)}
                />
                <br></br>
                <label htmlFor="registerEmail"></label>
                <input
                    id="registerEmail"
                    type="email"
                    value={email}
                    placeholder="email"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>): void => setEmail(e.target.value)}
                />
                <br></br>
                <label htmlFor="registerPassword"></label>
                <input
                    id="registerPassword"
                    type="password"
                    value={password}
                    placeholder="password"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>): void => setPassword(e.target.value)}
                />
                <br></br>
                <Button>register</Button>
                {/* {isError? <p>{error}</p> : ''} */}
                <div className="alreadyRegistered"></div>
            </form>
        </div>
    )
}

export default Register;