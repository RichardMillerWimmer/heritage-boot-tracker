import React from 'react';
// import { useDispatch } from 'react-redux';
// import axios from 'axios';
import { withRouter } from 'react-router';
// import Dropdown from './Dropdown';

const Header: React.FC = () => {

    // const dispatch = useDispatch();

    // const logout = (): void => {
    //     axios.delete('/api/auth/logout')
    //         .then(() => {
    //             props.history.push('/');
    //             dispatch({ type: 'LOGOUT_USER' });
    //         })
    //         .catch((error) => console.log(error))
    // }

    return (
        <section className='header'>
            {/* <Dropdown /> */}
        </section>
    )
}

export default withRouter(Header);