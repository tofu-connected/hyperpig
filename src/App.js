import { NextUIProvider } from '@nextui-org/react';
import { darkTheme, lightTheme } from './components/Themes';
import useDarkMode from '@fisch0920/use-dark-mode';
import { globalCss } from '@nextui-org/react';

import Header from './components/Header';
import CreatedImagesGallery from './components/CreatedImagesGallery/CreatedImagesGallery.js';
import GenerationSettings from './components/GenerationSettings/GenerationSettings';
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
          <CreatedImagesGallery />
          <GenerationSettings />
          <Imagestyles />
        </div>  
      </div>
    </NextUIProvider>
  );
}

export default App;
