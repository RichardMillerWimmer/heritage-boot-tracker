import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';

import Button from './Button';

const AddBoot: React.FC = () => {
    const [name, setName] = useState<string>('');
    const [img, setImg] = useState<string>('');
    const [wears, setWears] = useState<string>('');
    const [ccs, setCcs] = useState<string>('');
    const [note, setNote] = useState<string>('');

    const dispatch = useDispatch();

    const addBoot = (): void => {
        axios.post('/api/boot/add', {name, wears, ccs, note, img })
        .then((res) => {
            const boot = res.data;
            dispatch({type: 'ADD_BOOT', payload: boot});
            setName(''); 
            setImg(''); 
            setNote(''); 
            setWears(''); 
            setCcs(''); 
        })
        .catch((error => console.log(error)))
    };

    return (
        <div className='addBoot'>
            <form
            id="addBootForm"
            onSubmit={(e: React.SyntheticEvent) => {
                e.preventDefault();
                addBoot();
            }}>
                <h3>Add Boot</h3>
                <label htmlFor="addName"></label>
                <input 
                id="addName"
                type="text"
                value={name}
                placeholder="boot"
                onChange={(e: React.ChangeEvent<HTMLInputElement>): void => setName(e.target.value)}
                 />
                 <br></br>
                <label htmlFor="addWears"></label>
                <input 
                id="addWears"
                type="number"
                min="0"
                step="1"
                value={wears}
                placeholder="wears"
                onChange={(e: React.ChangeEvent<HTMLInputElement>): void => setWears(e.target.value)}
                 />
                 <br></br>
                <label htmlFor="addCcs"></label>
                <input 
                id="addCcs"
                type="number"
                min="0"
                step="1"
                value={ccs}
                placeholder="clean and conditions"
                onChange={(e: React.ChangeEvent<HTMLInputElement>): void => setCcs(e.target.value)}
                 />
                 <br></br>
                <label htmlFor="addNote"></label>
                <textarea 
                id="addNote"
                form="addBootForm"
                value={note}
                placeholder="notes"
                rows={10}
                cols={30}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>): void => setNote(e.target.value)}
                 />
                 <br></br>
                <label htmlFor="addImage"></label>
                <input 
                id="addImage"
                type="text"
                value={img}
                placeholder="image url"
                onChange={(e: React.ChangeEvent<HTMLInputElement>): void => setImg(e.target.value)}
                 />
                 <br />
                 <Button>add boot</Button>
            </form>
        </div>
    )
}

export default AddBoot;