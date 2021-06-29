import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';

const AddBoot: React.FC = () => {
    const [make, setMake] = useState<string>('');
    const [model, setModel] = useState<string>('');
    const [leather, setLeather] = useState<string>('');
    const [wears, setWears] = useState<string>('');
    const [ccs, setCcs] = useState<string>('');
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
            setWears(''); 
            setCcs(''); 
            setNote(''); 
            setImg(''); 
        })
        .catch((error => console.log(error)))
    };

    return (
        <div>
            <h3>Add Boot</h3>
            <form
            id="addBootForm"
            onSubmit={(e: React.SyntheticEvent) => {
                e.preventDefault();
                addBoot();
            }}>
                <label htmlFor="addMake">make:</label>
                <input 
                id="addMake"
                type="text"
                value={make}
                placeholder="make"
                onChange={(e: React.ChangeEvent<HTMLInputElement>): void => setMake(e.target.value)}
                 />
                 <br></br>
                <label htmlFor="addModel"></label>
                <input 
                id="addModel"
                type="text"
                value={model}
                placeholder="model"
                onChange={(e: React.ChangeEvent<HTMLInputElement>): void => setModel(e.target.value)}
                 />
                 <br></br>
                <label htmlFor="addLeather"></label>
                <input 
                id="addLeather"
                type="text"
                value={leather}
                placeholder="leather"
                onChange={(e: React.ChangeEvent<HTMLInputElement>): void => setLeather(e.target.value)}
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
                placeholder="Clean and Conditions"
                onChange={(e: React.ChangeEvent<HTMLInputElement>): void => setCcs(e.target.value)}
                 />
                 <br></br>
                <label htmlFor="addNote"></label>
                <textarea 
                id="addNote"
                form="addBootForm"
                value={note}
                placeholder="notes"
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
                 <button>add boot</button>
            </form>
        </div>
    )
}

export default AddBoot;