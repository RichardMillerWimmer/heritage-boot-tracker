import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';

import { User } from 'customTypes';

import Button from './Button';

const Login: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    // const [isError, setIsError] = useState<boolean>(false);
    // const [error, setError] = useState<string>('');

    const dispatch = useDispatch();

    const login = (): void => {
        axios.post<User>('/api/auth/login', { email, password })
            .then((res) => {
                const user = res.data;
                console.log(user)
                dispatch({ type: 'UPDATE_USER', payload: user });
                setEmail('');
                setPassword('');
            })
            .catch((error => {
                console.log(error)
                // setIsError(true);
                // setError(error)
            }))

    }

    return (
        <section className='login'>
            <h3>Login Component</h3>
            <form onSubmit={(e: React.SyntheticEvent) => {
                e.preventDefault();
                login();
            }}>
                <label htmlFor="loginEmail">email:</label>
                <input
                id="loginEmail"
                    type="email"
                    value={email}
                    placeholder="email"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>): void => setEmail(e.target.value)}
                />
                <br></br>
                <label htmlFor="loginPassword">password:</label>
                <input
                    id="loginPassword"
                    type="password"
                    value={password}
                    placeholder="password"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>): void => setPassword(e.target.value)}
                />
                <br></br>
                <Button>login</Button>
                {/* {isError ? <p>{error}</p> : ''} */}
                <div className="needToRegister"></div>
            </form>
        </section>
    )
}

export default Login;