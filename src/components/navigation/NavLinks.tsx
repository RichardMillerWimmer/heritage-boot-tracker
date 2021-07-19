import React from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { RouteComponentProps } from 'react-router-dom';

import { RootState } from '../../redux/store';


const NavLinks: React.FC<RouteComponentProps> = (props: RouteComponentProps) => {

    const user = useSelector((state: RootState) => state.userReducer)

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
        <div className='navlinks'>
            <nav>{!user ?
                <ul>
                    <Link to='/'>Home</Link>
                    <Link to='/login'>Login</Link>
                    <Link to='/register'>Register</Link>
                </ul>
                :
                <ul>
                    <Link to='/'>Home</Link>
                    <Link to='/account'>Account</Link>
                    <a onClick={logout}>Logout</a>
                </ul>
            }
            </nav>
        </div>
    )
}

export default withRouter(NavLinks);