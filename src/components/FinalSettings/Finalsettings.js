import { Button, Tooltip, Link, Text, Image } from '@nextui-org/react';

import { ChangeStrength } from '../Tooltipsplus/ChangeStrength.js';
import { UploadImage } from '../Tooltipsplus/UploadImage';
import { AddImageChosenIcon } from '../Buttonsplus/AddImageChosenIcon';
import MyImage from '../../img/1.png';

const Finalsettings = () => {
    return (
        <div className="final-settings">
            <div className="chosen-image">
                <Tooltip trigger="hover" placement="topStart" content={<UploadImage />}>
                    <Image src={MyImage} alt="" />
                </Tooltip>
                <div className="chosen-image-hover">
                    <AddImageChosenIcon />
                </div>
            </div>
            <div className="change-strength">
                <Tooltip
                    trigger="hover"
                    placement="topStart" content={<ChangeStrength />}>
                    <Link css={{ '@xs': { height: "20px", }}}>{/* Удалить, если не нужно */}
                        <Text color="secondary">STRENGTH</Text>
                    </Link>
                </Tooltip>
                <input type="range" name="strentgh" id="strength" />
                <Button color="secondary" auto rounded>GO!</Button>
            </div>
        </div>
    )
}

export default Finalsettings