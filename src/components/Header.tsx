import React from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { RouteComponentProps, withRouter } from 'react-router';

const Header: React.FC<RouteComponentProps> = (props: RouteComponentProps) => {

    const dispatch = useDispatch();

    const logout = (): void => {
        axios.delete('/api/auth/logout')
            .then(() => {
                props.history.push('/');
                dispatch({ type: 'LOGOUT_USER' });
            })
            .catch((error) => console.log(error))
    }

    return (
        <div>
            <h3>Header Component</h3>
            <button onClick={logout}>logout</button>
        </div>
    )
}

export default withRouter(Header);