import { Button, Switch, Text } from '@nextui-org/react';
import useDarkMode from '@fisch0920/use-dark-mode';

import { SunIcon } from './ButtonsAndIcons/SunIcon.js';
import { MoonIcon } from './ButtonsAndIcons/MoonIcon.js';
import { LogOutIcon } from './ButtonsAndIcons/LogOutIcon.js';
import logo from '../logo.svg';


const Header = (props) => {
    const darkMode = useDarkMode(false);
    return (
        <header className="header">
            <div className="header-wrapper">
                <div className="logo"><img src={logo} alt="" /></div>
                <div className="our-buttons">
                    <Text>{props.userData.username}</Text>
                    {props.loggedIn ? <Button bordered auto icon={<LogOutIcon fill="currentColor" filled />} css={{ height: "34px" }}
                    onPress={props.logOutHandler} /> : <Button as="a" bordered size={{ '@xsMax': 'xs', '@xsMin': 'sm' }} css={{ color: '$accentColor', borderColor: '$accentColor' }} target="_blank" onPress={props.loginModalHandler}>Login</Button>}

                    <Switch size={{ '@xsMax': 'sm', '@xsMin': 'md' }} bordered color='secondary'
                        checked={darkMode.value}
                        onChange={() => darkMode.toggle()}
                        iconOn={<MoonIcon filled />}
                        iconOff={<SunIcon filled />}
                    />
                    <Button as="a" size={{ '@xsMax': 'xs', '@xsMin': 'sm' }} target="_blank" css={{
                        background: '$accentColor',
                        color: '$white',
                    }} onPress={props.onPressGoParty}>Go Party</Button>
                </div>
            </div>
        </header>
    )
}

export default Header