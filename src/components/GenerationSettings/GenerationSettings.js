import { useState, useRef } from 'react';
import { Button, Tooltip, Link, Text, Image } from '@nextui-org/react';

import useRange from '../../hooks/useRange.js';
import { ChangeStrength } from '../TooltipsAndPopovers/ChangeStrength.js';
import { UploadImage } from '../TooltipsAndPopovers/UploadImage';
import { AddImageChosenIcon } from '../ButtonsAndIcons/AddImageChosenIcon';

function GenerationSettings() {
    const strengthRef = useRef(null);
    const imgRef = useRef(null);

    const [file, setFile] = useState();

    const goOnPress = async () => {
        // get an image selected by user 
        console.log(file);
        let response = await fetch(file); // TODO: does not work (sends default image for now)
        const imageBlob = await response.blob();

        // make a request to a backend server, result image is returned in response
        const query = new URLSearchParams({ prompt: 'cartoon dragon', strength: '0.7' }).toString();
        response = await fetch(`http://localhost:5000/?${query}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'image/png',
                'Content-Length': imageBlob.length,
                'Cache-Control': 'no-cache',
            },
            body: imageBlob,
        });

        /* TODO: handle returned image */
        const outputBlob = await response.blob();
        //window.activeImg = 'test'
        setFile(URL.createObjectURL(outputBlob));
        console.log(file);
    };

    const handleFileChange = (e) => {
        setFile(URL.createObjectURL(e.target.files[0]));
    };

    return (
        
        <div className="final-settings">
            <div className="chosen-image">
                <Tooltip trigger="hover" placement="topStart" content={<UploadImage />}>
                    <Image {...imgRef.initialValue} alt="" ref={imgRef} src={file} />
                </Tooltip>
                <div className="chosen-image-hover">
                    <AddImageChosenIcon />
                </div>
                <label htmlFor="uploadimage-button">
                    <input type="file" onChange={handleFileChange} name="uploadimage-button" accept="image/png, image/gif, image/jpeg"/>
                </label>
            </div>
            <div className="change-strength">
                <Tooltip
                    trigger="hover"
                    placement="topStart" content={<ChangeStrength />}>
                    <Link css={{ '@xs': { height: "20px", } }}>
                        <Text color="secondary">STRENGTH</Text>
                    </Link>
                </Tooltip>
                <input type="range" name="strength" id="strength" min="0" max="1000" {...strengthRef.initialValue} ref={strengthRef} />
                <Button color="secondary" auto rounded onPress={goOnPress}>GO!</Button>
            </div>
        </div>
    );
}

export default GenerationSettings;