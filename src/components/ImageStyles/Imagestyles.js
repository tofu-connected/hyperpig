import { Tooltip, Link, Text } from "@nextui-org/react";

import { ChooseStyle } from "../Tooltipsplus/ChooseStyle";
import Cards from "./Cards";

const Imagestyles = () => {
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
            <Cards />
        </div>    
        
        </div>
    )
}

export default Imagestyles