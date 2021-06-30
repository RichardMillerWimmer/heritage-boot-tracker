import React from 'react';

import { Boot } from 'customTypes';

const BootBox: React.FC<Boot> = (props: Boot): JSX.Element => {
    const {name, image, notes, wears, cc} = props;

    return (
        <div>
            <h3>BootBox Component</h3>
            <h4>{name}</h4>
            <img src={image} alt={name} />
            <p>{notes}</p>
            <p>wears: {wears}</p>
            <p>clean and conditions: {cc}</p>
        </div>
    )
}

export default BootBox;