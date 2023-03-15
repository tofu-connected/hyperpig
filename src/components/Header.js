import { Button, Switch } from '@nextui-org/react';
import useDarkMode from '@fisch0920/use-dark-mode';

import { SunIcon } from './ButtonsAndIcons/SunIcon.js';
import { MoonIcon } from './ButtonsAndIcons/MoonIcon.js';
import logo from '../logo.svg';


const Header = ({onPressGoParty}) => {
    const darkMode = useDarkMode(false);

    return (
        <header className="header">
            <div className="header-wrapper">
                <div className="logo"><img src={logo} alt="" /></div>
                <div className="our-buttons">
                    <Switch size={{'@xsMax': 'sm','@xsMin':'md'}} bordered color={'secondary'}
                        checked={darkMode.value}
                        onChange={() => darkMode.toggle()}
                        iconOn={<MoonIcon filled />}
                        iconOff={<SunIcon filled />}
                    />
                    <Button as="a" size={{'@xsMax': 'xs','@xsMin':'sm'}} target="_blank" css={{
                        background: '$purple700',
                        color: '$white',
                    }} onPress={onPressGoParty}>Go Party</Button>

                    </div>
                </div>
        </header>
    )
}

export default Header