import React

import { Boot } from 'customTypes';

const BootBox: React.FC<Boot> = (props: Boot): JSX.Element => {
    const {boot_id, name, image, notes, wears, cc} = props.boot;

    return (
        <div>
            <h3>BootBox Component</h3>
        </div>
    )
}

export default BootBox;