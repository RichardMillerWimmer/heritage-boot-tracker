import axios from 'axios';
import React, { ReactNodeArray, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

import { Boot } from 'customTypes';
import BootBox from './BootBox';

const BootCollection: React.FC = () => {
    const user = useSelector((state: RootState) => state.userReducer)

    const [userBoots, setUserBoots] = useState<Boot[]>([]);

    useEffect((): void => {
        getUserBoots()
    }, [])

    const getUserBoots = (): void => {
        axios.get('/api/boot/boot')
        .then((res) => {
            const userBootsData = res.data;
            console.log(userBootsData);
            setUserBoots(userBootsData);
        })
        .catch((error) => console.log(error))
    };

    const mappedBoots = () => {
        userBoots.map((elem: Boot, index: number) => {
            return (
                <div key={index}>
                    <BootBox boot={elem}></BootBox>
                </div>
            )
        })
    };


    return (
        <div>
            <h3>{user.username} Boot Collection</h3>
            {mappedBoots}
        </div>
    )
}

export default BootCollection;