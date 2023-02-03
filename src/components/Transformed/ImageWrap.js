import React from 'react'
import { Modal, Image, Link, Button, Popover}from '@nextui-org/react'
import { Share } from '../Tooltipsplus/Share'
import { ShareIcon } from "../Buttonsplus/ShareIcon.js";

const ImageWrap = props => {
    const [visible, setVisible] = React.useState(false);
    const handler = () => setVisible(true);
    
    const closeHandler = () => {
        setVisible(false);
    };
    return (
        <div className={"img-wrap " +  props.orient }>
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
            <Link css={{ '&:hover': { "opacity": 1 } }} onPress={handler}><Image src={props.src} alt={props.prompt} /></Link>
            <Modal width="90%" noPadding open={visible} onClose={closeHandler}>
                <Image css={{height: "auto", maxHeight: "90vh", objectFit: "scale-down"}} src={props.src} alt={props.prompt} />
            </Modal>
        </div>
    )
}

export default ImageWrap