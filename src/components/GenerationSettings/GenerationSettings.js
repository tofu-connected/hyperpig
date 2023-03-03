import { useState, useRef } from 'react';
import { Button, Tooltip, Link, Text, Image } from '@nextui-org/react';

import useRange from '../../hooks/useRange.js';
import { ChangeStrength } from '../TooltipsAndPopovers/ChangeStrength.js';
import { UploadImage } from '../TooltipsAndPopovers/UploadImage';
import { AddImageChosenIcon } from '../ButtonsAndIcons/AddImageChosenIcon';

function GenerationSettings() {
    const strength = useRange(500)
    const strengthRef = useRef(null);
    const imgRef = useRef(null);

    /*Upload File*/
    const [file, setFile] = useState();

    const handleFileChange = (e) => {
        setFile(URL.createObjectURL(e.target.files[0]));
    };

    const onPressGo = () => {
        console.log(strengthRef.current.value);
        console.log(imgRef.current.src);
    }
    return (
        <div className="final-settings">
            <div className="chosen-image">
                <Tooltip trigger="hover" placement="topStart" content={<UploadImage mysrc = { file } />}>
                    <Image src = { file } alt="" ref={ imgRef } />
                
                <div className="chosen-image-hover" onClick={handleFileChange}>
                    <AddImageChosenIcon />
                </div>
                <label htmlFor="uploadimage-button">
                    <input type="file" onChange={handleFileChange} name="uploadimage-button" accept="image/png, image/gif, image/jpeg"/>
                </label>
                </Tooltip>
            </div>
            <div className="change-strength">
                <Tooltip
                    trigger="hover"
                    placement="topStart" content={<ChangeStrength />}>
                    <Link css={{ '@xs': { height: "20px", } }}>
                        <Text color="secondary">STRENGTH</Text>
                    </Link>
                </Tooltip>
                <input type="range" min="0" max="1000" {...strength} ref={strengthRef} />
                <Button color="secondary" auto rounded onPress={onPressGo}>GO!</Button>
            </div>
        </div>
    );
}

export default GenerationSettings