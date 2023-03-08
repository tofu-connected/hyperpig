import { useState } from 'react';
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

  const onPressGo = async () => {   

    // get an image selected by user 
    console.log(selectedFileUrl);
    let response = await fetch(selectedFileUrl); // TODO: does not work (sends default image for now)
    const imageBlob = await response.blob();

    // make a request to a backend server, result image is returned in response
    const query = new URLSearchParams({ prompt: 'cartoon dragon', strength: '0.7' }).toString();
    response = await fetch(`http://localhost:5000/?${query}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'image/png',
        'Content-Length': imageBlob.length,
        'Cache-Control': 'no-cache',
      },
      body: imageBlob,
    });

    /* TODO: handle returned image */
    const outputBlob = await response.blob();
    //window.activeImg = 'test'
    setSelectedFileUrl(URL.createObjectURL(outputBlob));
    console.log(selectedFileUrl);

    //partytestdata
    console.log(`Go is pressed & the value of strength is ${strength} and selectedfileUrl ${selectedFileUrl}`);
  };

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
