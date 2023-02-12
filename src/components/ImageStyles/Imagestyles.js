import { Tooltip, Link, Text } from "@nextui-org/react";

import { ChooseStyle } from "../TooltipsAndPopovers/ChooseStyle";
import StyleCards from "./StyleCards";

const ImageStyles = () => {
    return (
        <div className="image-style">
            
            <div className="tool-name">
                <Tooltip
                    trigger="hover"
                    placement="bottomEnd" content={<ChooseStyle />}>
                    <Link>
                        <Text color="secondary">STYLES</Text>
                    </Link>
                </Tooltip>
            </div>
        <div className="image-style-wrap">            
            <StyleCards />
        </div>    
        
        </div>
    )
}

export default ImageStyles