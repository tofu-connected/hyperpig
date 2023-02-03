import { NextUIProvider } from '@nextui-org/react';
import { darkTheme, lightTheme } from './components/Themes';
import useDarkMode from '@fisch0920/use-dark-mode';
import { globalCss } from '@nextui-org/react';

import Header from './components/Header';
import Transformed from './components/Transformed/Transformed.js';
import Finalsettings from './components/FinalSettings/Finalsettings';
import Imagestyles from './components/ImageStyles/Imagestyles';


const globalStyles = globalCss({
  body: { letterSpacing: "0.3px" },
  button: {letterSpacing: "0.5px"},
});

function App() {
  const darkMode = useDarkMode(false);
  globalStyles();  
  
  return (
    <NextUIProvider theme={darkMode.value ? darkTheme : lightTheme }>
      <div className="body"> 
        <div className="wrapper">
          <Header />
          <Transformed />
          <Finalsettings />
          <Imagestyles />
        </div>  
      </div>
    </NextUIProvider>
  );
}

export default App;
