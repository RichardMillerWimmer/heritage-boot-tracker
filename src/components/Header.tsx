import React from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { RouteComponentProps, withRouter } from 'react-router';
import Dropdown from './Dropdown';

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
        <section className='header'>
            {/* <h2>BootHunter</h2> */}
            <button onClick={logout}>logout</button>
            <Dropdown />
        </section>
    )
}

export default withRouter(Header);