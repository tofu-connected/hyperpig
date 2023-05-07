import { Tooltip, Link, Text } from '@nextui-org/react';


import { ChangeStrength } from '../TooltipsAndPopovers/ChangeStrength';

export default function StrenghtSettings({ onStrength,children, strength }) {
    
    
    return (
        <div className="change-strength">
            <Tooltip
                trigger="hover"
                placement="topStart" content={<ChangeStrength />}>
                <Link css={{ '@xs': { height: "20px", } }}>
                    <Text color="secondary">STRENGTH</Text>
                </Link>
            </Tooltip>
            <input type="range" min="0" max="100" step="10" value= { strength } onChange = { onStrength } title = {strength} />
            {children}
        </div>
    )
}