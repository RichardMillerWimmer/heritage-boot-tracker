import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';

const AddBoot: React.FC = () => {
    const [make, setMake] = useState<string>('');
    const [model, setModel] = useState<string>('');
    const [leather, setLeather] = useState<string>('');
    const [wears, setWears] = useState<number>(0);
    const [ccs, setCcs] = useState<number>(0);
    const [note, setNote] = useState<string>('');
    const [img, setImg] = useState<string>('');

    const dispatch = useDispatch();

    const addBoot = (): void => {
        axios.post('/api/boot/add', {make, model, leather, wears, ccs, note, img })
        .then((res) => {
            const boot = res.data;
            dispatch({type: 'ADD_BOOT', payload: boot});
            setMake(''); 
            setModel(''); 
            setLeather(''); 
            setWears(0); 
            setCcs(0); 
            setNote(''); 
            setImg(''); 
        })
        .catch((error => console.log(error)))
    };

    return (
        <div>
            <h3>AddBoot Component</h3>
        </div>
    )
}

export default AddBoot;