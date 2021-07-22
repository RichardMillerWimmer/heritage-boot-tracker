import React from 'react';

import { withRouter } from 'react-router';

import NavLinks from './NavLinks';

const Navigation: React.FC = () => {


    return (
        <div className='navigation'>
            <NavLinks />
        </div>
    )
}

export default withRouter(Navigation);