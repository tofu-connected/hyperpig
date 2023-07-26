import { Tooltip, Image } from '@nextui-org/react';

import { AddImageChosenIcon } from '../ButtonsAndIcons/AddImageChosenIcon';
import { UploadImage } from '../TooltipsAndPopovers/UploadImage';

export default function ChosenImage({onFileChange, selectedFileUrl, fileName}) {
    
    
    return (
        <div className="chosen-image" >
            <Tooltip trigger="hover" placement="topStart" content={<UploadImage mysrc={selectedFileUrl} />}>
                <Image src={selectedFileUrl} alt="" />
                <div className="chosen-image-hover">
                    <AddImageChosenIcon />
                </div>
                <label htmlFor="uploadimage-button">
                    <input type="file" onChange={onFileChange} title={fileName} name="uploadimage-button" accept="image/png, image/gif, image/jpeg" />
                </label>
            </Tooltip>

        </div>
    )
}
