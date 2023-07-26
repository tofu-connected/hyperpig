import { Button, Popover } from '@nextui-org/react';

import Ratio from '../TooltipsAndPopovers/Ratio';

export const ImageRatioButton = () => {
    return (
        <div className="image-ratio">
            <div className="image-ratio-active">
                <Popover isBordered placement={'right-top'} >
                    <Popover.Trigger>
                        <Button auto shadow bordered css={{ borderRadius: '$xs', border: '$white solid 2px', backgroundColor: "transparent", color: '$white', textShadow: '0px 0px 4px #201925', boxShadow: "0px 0px 4px 0px #201925, inset 0px 0px 4px 0px #201925 ", padding: "0", aspectRatio: '1/1' }}>
                            1:1
                        </Button>
                    </Popover.Trigger>
                    <Popover.Content css={{
                        backgroundColor: "rgba(32, 25, 37, 0.5)", border: "3px solid $white", '@xsMax': {
                            scale: "0.9"
                        },
                    }}
                        >
                        <Ratio />
                    </Popover.Content>
                </Popover>
            </div>
        </div >
    )
}