import { useRef } from 'react';
import { Button, Tooltip, Link, Text, Image, normalColors } from '@nextui-org/react';

import useRange from '../../hooks/useRange.js';
import { ChangeStrength } from '../TooltipsAndPopovers/ChangeStrength.js';
import { UploadImage } from '../TooltipsAndPopovers/UploadImage';
import { AddImageChosenIcon } from '../ButtonsAndIcons/AddImageChosenIcon';

function GenerationSettings() {
    const state = {
        get sourceImage() {
            return state._imgRef.current.src;
        },
        get strength() {
            return state._strengthRef.current.value;
        },
        async goOnPress() {
            try {
                // get an image selected by user 
                let response = await fetch(MyImage); // TODO: does not work (sends default image for now)
                const imageBlob = await response.blob();

                // make a request to a backend server, result image is returned in response
                const query = new URLSearchParams({ prompt: 'beautiful man', strength: '0.6' }).toString();
                response = await fetch(`http://localhost:5000/?${query}`, {
                    // mode: 'no-cors',
                    method: 'POST',
                    headers: {
                        'Content-Type': 'image/png',
                        'Content-Length': imageBlob.length,
                    },
                    body: imageBlob,
                });

                const data = await response.json();

                /* TODO: handle returned image */
                
            } catch (error) {
                console.error(error);
            }
        },
        _strengthRef: useRef(null),
        _imgRef: useRef(MyImage),
    };

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