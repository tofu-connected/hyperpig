import { useRef } from 'react';
import { Button, Tooltip, Link, Text, Image } from '@nextui-org/react';

import useRange from '../../hooks/useRange.js';
import { ChangeStrength } from '../TooltipsAndPopovers/ChangeStrength.js';
import { UploadImage } from '../TooltipsAndPopovers/UploadImage';
import { AddImageChosenIcon } from '../ButtonsAndIcons/AddImageChosenIcon';
import MyImage from '../../img/1.png';

function GenerationSettings() {
    const strength = useRange(500)
    const strengthRef = useRef(null);
    const imgRef = useRef(null);

    const onPressGo = () => {
        console.log(strengthRef.current.value);
        console.log(imgRef.current.src);
    }
    return (
        <div className="final-settings">
            <div className="chosen-image">
                <Tooltip trigger="hover" placement="topStart" content={<UploadImage />}>
                    <Image src={MyImage} alt="" ref={ imgRef} />
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
                <input type="range" name="strength" id="strength" min="0" max="1000" {...strength} ref={strengthRef} />
                <Button color="secondary" auto rounded onPress={onPressGo}>GO!</Button>
            </div>
        </div>
    );
}

export default GenerationSettings