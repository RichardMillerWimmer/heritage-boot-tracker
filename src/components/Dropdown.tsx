import React, { useState } from 'react';

import { withRouter } from 'react-router';

const Dropdown: React.FC = () => {
    const [open, setOpen] = useState(false);
    const [selection, setSelection] = useState([]);
    
    const toggle = () => setOpen(!open); 

    function handleOnClick(item) {

    };

    return (
        <div className='dropdown'>
            <h4>Dropdown Menu</h4>
            <div 
                tabIndex={0} role='button' 
                onKeyPress={() => toggle()} 
                onClick={() => toggle()}>
                    <div>
                        <p>Title</p>
                    </div>
            </div>
        </div>
    )
}

export default withRouter(Dropdown);