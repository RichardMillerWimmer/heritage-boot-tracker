import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';

import {User} from 'customTypes';


const Register: React.FC = () => {
    const [username, setUsername] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const dispatch = useDispatch();

    const register = (): void => {
        axios.post<User>('/api/auth/register', {username, email, password})
        .then((res) => {
            const user = res.data;
            dispatch({ type: 'UPDATE_USER', payload: user })
        })
    }

    return (
        <div>
            <h3>Register Component</h3>
            <form
              onSubmit={(e: React.SyntheticEvent) => {
                e.preventDefault();
                register();
              }}>
              <h3>register</h3>
              <label htmlFor="username">username:</label>
              <input
                id="username"
                value={username}
                onChange={(e: React.ChangeEvent<HTMLInputElement>): void => setUsername(e.target.value)}
              />
              <br></br>
              <label htmlFor="email">email:</label>
              <input
                id="email"
                value={email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>): void => setEmail(e.target.value)}
              />
              <br></br>
              <label htmlFor="password">password:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e: React.ChangeEvent<HTMLInputElement>): void => setPassword(e.target.value)}
              />
              <br></br>
              <button>register</button>
              <div className="alreadyRegistered">
                {/* <span style={{ cursor: 'pointer' }} onClick={toggleLogin}>
                  already register?
                </span> */}
              </div>
            </form>
        </div>
    )
}

export default Register;