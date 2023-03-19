import { useState } from 'react';
import { Modal, Image, Link, Button, Popover} from '@nextui-org/react';
import { Share } from '../TooltipsAndPopovers/Share';
import { ShareIcon } from '../ButtonsAndIcons/ShareIcon.js';


const ImageContainer = ({ orient, src, prompt }) => {
    const [visible, setVisible] = useState(false);
    const openHandler = () => setVisible(true);

    const closeHandler = () => {
        setVisible(false);
    };
    
    return (
        <div className={"img-wrap"}>
            <div className="share-wrap">
                <Popover placement={'left-top'}>
                    <Popover.Trigger>
                        <Button icon={<ShareIcon fill="#fff" />} color="$white" css={{ borderRadius: '$xs', border: 'transparent solid 2px', backgroundColor: "transparent", color: '$white' }} auto ghost></Button>
                    </Popover.Trigger>
                    <Popover.Content css={{ backgroundColor: "rgba(32, 25, 37, 0.5)", border: "2px solid $white", marginLeft: "20px", }}>
                        <Share />
                    </Popover.Content>
                </Popover>
            </div>
            <Link css={{ '&:hover': { "opacity": 1 } }} onClick={openHandler}><Image src={src} alt={prompt} /></Link>
            <Modal width="max-content" css="height: max-content, maxHeight: 90%, maxWidth: 90%" open={visible} onClose={closeHandler}>
                <Image css={{ height: "auto", maxHeight: "90vh", maxWidth: "90vw", objectFit: "scale-down" }} src={src} alt={prompt} />
            </Modal>
        </div>
    )
}
export default ImageContainer