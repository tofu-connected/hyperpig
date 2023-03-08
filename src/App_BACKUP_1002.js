import { useState } from 'react';
import { NextUIProvider } from '@nextui-org/react';
import { darkTheme, lightTheme } from './components/Themes';
import useDarkMode from '@fisch0920/use-dark-mode';
import { globalCss } from '@nextui-org/react';

import Header from './components/Header';
import CreatedImagesGallery from './components/CreatedImagesGallery/CreatedImagesGallery.js';
import GenerationSettings from './components/GenerationSettings/GenerationSettings';
import Imagestyles from './components/ImageStyles/Imagestyles';
<<<<<<< HEAD
import { useState } from 'react';
=======
>>>>>>> 5b86e74 (Hooks and Data are in App.js)

const globalStyles = globalCss({
  body: { letterSpacing: "0.3px" },
  button: { letterSpacing: "0.5px" },
});

function App(props) {

  const darkMode = useDarkMode(false);
  globalStyles();

  const addSaveHandler = file => {
    console.log('In App Js');
    console.log(file);
  }
  const [strength, setStrength] = useState(500);
  const onStrengthChange = (e) => {
    setStrength(e.target.value)
  }
  
  const [selectedFileUrl, setSelectedFileUrl] = useState();
  const [fileName, setFileName] = useState('Choose File');

  const fileChange = (e) => {
    if (e.target.files.length !== 0) {
      const file = e.target.files[0];
      setSelectedFileUrl(URL.createObjectURL(file));
      setFileName(file.name);      
    }
  };

  const onPressGo = () => {
    console.log(`Go is pressed & the value of strength is ${strength} and selectedfileUrl ${selectedFileUrl}`);
  }
  return (
    <NextUIProvider theme={darkMode.value ? darkTheme : lightTheme}>
      <div className="body">
        <div className="wrapper">
          <Header />
          <CreatedImagesGallery selectedFileUrl={selectedFileUrl} fileName={fileName} onFileChange={fileChange} />
          <GenerationSettings selectedFileUrl={selectedFileUrl} fileName={fileName} onFileChange={fileChange} onStrength={onStrengthChange} strength={strength} onSaveFile={addSaveHandler} onPress={onPressGo} />
          <Imagestyles />
        </div>
      </div>
    </NextUIProvider>
  );
}

export default App;
