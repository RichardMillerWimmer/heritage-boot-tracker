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
        <div >
            <nav >{!user.username ?
                <ul className='navlinks'>
                    <Link className='link' to='/'>Home</Link>
                    <Link className='link' to='/login'>Login</Link>
                    <Link className='link' to='/register'>Register</Link>
                </ul>
                :
                <ul className='navlinks'>
                    <Link className='link' to='/'>Home</Link>
                    <Link className='link' to='/account'>Account</Link>
                    <a className='link' onClick={logout}>Logout</a>
                </ul>
            }
            </nav>
        </div>
    )
}

export default withRouter(NavLinks);