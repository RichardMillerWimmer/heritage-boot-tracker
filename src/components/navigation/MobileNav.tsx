import React from 'react';
// import { useSelector } from 'react-redux';

// import { RootState } from '../../redux/store';

import { withRouter } from 'react-router';

import NavLinks from './NavLinks';


const MobileNav: React.FC = () => {

    // const user = useSelector((state: RootState) => state.userReducer)

    // function handleOnClick(item) {

    // };

    return (
        <div className='mobilenav'>
            <p>mobile nav</p>
            <NavLinks />
        </div>
    )
}

export default withRouter(MobileNav);