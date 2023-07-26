import React from 'react'
import { Button } from '@nextui-org/react'

export const BorderedButton = props => {
    return (
        <Button auto bordered css={{ borderRadius: '$xs', border: '$white solid 2px', backgroundColor: "transparent", color: '$white', textShadow: '0px 0px 4px #201925', height: "50px", width: "auto", padding: 0, aspectRatio: props.width + "/" + props.height }}>{props.width}:{props.height}</Button>
    )
}
