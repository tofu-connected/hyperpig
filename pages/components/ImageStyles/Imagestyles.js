import { Tooltip, Link, Text } from "@nextui-org/react";

import { ChooseStyle } from "../TooltipsAndPopovers/ChooseStyle";
import StyleCards from "./StyleCards";

const ImageStyles = ({ cards, onAddActive, activeId, activeName }) => {

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
                <StyleCards cards={cards} onAddActive={onAddActive} activeId={activeId} activeName={activeName} />
            </div>

        </div>
    )
}

export default ImageStyles