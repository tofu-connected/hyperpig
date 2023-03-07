import { useRef } from 'react';
import { Button, Tooltip, Link, Text, Image } from '@nextui-org/react';

import useRange from '../../hooks/useRange.js';
import { ChangeStrength } from '../TooltipsAndPopovers/ChangeStrength.js';
import { UploadImage } from '../TooltipsAndPopovers/UploadImage';
import { AddImageChosenIcon } from '../ButtonsAndIcons/AddImageChosenIcon';
import MyImage from '../../img/1.png';

function GenerationSettings() {
    const strengthRef = useRef(null);
    const imgRef = useRef(MyImage);

    const goOnPress = async () => {
        // get an image selected by user 
        let response = await fetch(MyImage); // TODO: does not work (sends default image for now)
        const imageBlob = await response.blob();

        // make a request to a backend server, result image is returned in response
        const query = new URLSearchParams({ prompt: 'beautiful man', strength: '0.6' }).toString();
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

        console.log(outputBlob);
    };

    return (
        <div className="final-settings">
            <div className="chosen-image">
                <Tooltip trigger="hover" placement="topStart" content={<UploadImage />}>
                    <Image {...imgRef.initialValue} alt="" ref={imgRef} />
                </Tooltip>
                <div className="chosen-image-hover">
                    <AddImageChosenIcon />
                </div>
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