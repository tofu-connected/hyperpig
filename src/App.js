import { searchMovies, getBlob, runInference, blobToBase64 } from './hyperlib';

import { useState, useEffect } from 'react';
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

  // State Setup
  const [strength, setStrength] = useState(500);
  const [selectedFileUrl, setSelectedFileUrl] = useState();
  const [fileName, setFileName] = useState('Choose File');
  const [cards, setCards] = useState([]);
  const [generatedImages, setGeneratedImages] = useState([]);
  const [activeId, setActiveId] = useState();
  const [activeName, setActiveName] = useState();

  useEffect(() => {
    searchMovies('Cyber')
      .then(res => setCards(res));
  }, []);

  const addActive = (id, name) => {
    setActiveId(id);
    setActiveName(name);
    console.log(`activeId ${id} name ${name}`);
  }

  const addGeneratedImages = src => {
    const imgs = [...generatedImages];
    imgs.unshift({ src })
    setGeneratedImages(imgs);
  }

  const onStrengthChange = e => {
    setStrength(e.target.value)
  }

  const fileChange = e => {
    if (e.target.files.length !== 0) {
      const file = e.target.files[0];
      if (selectedFileUrl !== undefined)
        addGeneratedImages(selectedFileUrl);
      setSelectedFileUrl(URL.createObjectURL(file));
      setFileName(file.name);
    }
  };

  async function onPressGo() {
    const inputBlob = await getBlob(selectedFileUrl);

    const outputBlob = await runInference({
      prompt: "",
      init_images: [
        await blobToBase64(inputBlob)
      ],

      width: 512,
      height: 512,

      sampler_name: "Euler a",
      steps: 20,
      cfg_scale: 0,
      denoising_strength: strength / 1000,
    });

    setSelectedFileUrl(URL.createObjectURL(outputBlob));

    console.log(`Go is pressed & the value of strength is ${strength} and selectedfileUrl ${selectedFileUrl}`);
  };

  return (
    <NextUIProvider theme={darkMode.value ? darkTheme : lightTheme}>
      <div className="body">
        <div className="wrapper">
          <Header />
          <CreatedImagesGallery generatedImages={generatedImages} selectedFileUrl={selectedFileUrl} fileName={fileName} onFileChange={fileChange} />
          <GenerationSettings selectedFileUrl={selectedFileUrl} fileName={fileName} onFileChange={fileChange} onStrength={onStrengthChange} strength={strength} onPress={onPressGo} />
          <Imagestyles cards={cards} onAddActive={addActive} activeId={activeId} activeName={activeName} />
        </div>
      </div>
    </NextUIProvider>
  );
}

export default App;
