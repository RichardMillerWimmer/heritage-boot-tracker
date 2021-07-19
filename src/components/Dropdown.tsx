import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../redux/store';

import { withRouter } from 'react-router';

const Dropdown: React.FC = () => {
    const [open, setOpen] = useState(false);

    const user = useSelector((state: RootState) => state.userReducer)

    const toggle = () => setOpen(!open);

    // function handleOnClick(item) {

    // };

    return (
        <div className='dropdown'>
            <h4>Dropdown Menu</h4>
            <div
                tabIndex={0} role='button'
                onKeyPress={() => toggle()}
                onClick={() => toggle()}>
                <div>
                    {/* <p>Title</p> */}
                </div>
                <div>
                    <p>{open ? 'Close' : 'Open'} </p>
                    <div> {open ? 
                        <nav>{!user ?
                            <ul>
                                <li>Home</li>
                                <li>Login</li>
                                <li>Register</li>
                            </ul>
                            :
                            <ul>
                                <li>Home</li>
                                <li>Account</li>
                                <li>Logout</li>
                            </ul>
                        }
                        </nav> 
                        :
                        ''
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Dropdown);