import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../redux/store';

const Account: React.FC = () => {
    const user = useSelector((state: RootState) => state.userReducer)

    const [username, setUsername] = useState<string>(user.username);
    const [email, setEmail] = useState<string>(user.email);
    const [password, setPassword] = useState<string>('password');

    const dispatch = useDispatch();

    const captureCurrentUser = (): void => {
        setUsername(user.username);
        setEmail(user.email);
        setPassword('password');
    }

    useEffect((): void => {
        captureCurrentUser();
    }, [user]);

    const saveChanges = (param: string): void => {
        let body = null;
        switch(param){
            case 'username':
                body = {username: username};
                break;
            case 'email': 
                body = {email: email};
                break;
            case 'password':
                body = {password: password}
                break;
        }
        axios.put(`api/user/${param}`, body)
        .then((res) => {
            const user = res.data;
            dispatch({ type: 'UPDATE_USER', payload: user});
        })
        .catch((error) => console.log(error))
    }

    return (
        <div>
            <h3>Account Component</h3>
        </div>
    )
}

export default Account;