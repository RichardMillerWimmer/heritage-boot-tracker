import React from 'react';
import { withRouter } from 'react-router';

// import Dropdown from './Dropdown';
import Navigation from './navigation/Navigation';



const Header: React.FC = () => {

    return (
        <section className='header'>
            <Navigation />
        </section>
    )
}

export default withRouter(Header);