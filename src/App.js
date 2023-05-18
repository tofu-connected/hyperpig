import { searchMovies, getBlob, runInference, runFishInference, blobToBase64 } from "./hyperlib";

import { useState, useEffect } from "react";
import { darkTheme, lightTheme } from "./components/Themes";
import useDarkMode from "@fisch0920/use-dark-mode";
import { globalCss, NextUIProvider } from "@nextui-org/react";

import Header from "./components/Header";
import CreatedImagesGallery from "./components/CreatedImagesGallery/CreatedImagesGallery.js";
import GenerationSettings from "./components/GenerationSettings/GenerationSettings";
import Imagestyles from "./components/ImageStyles/Imagestyles";
import ModalForm from "./components/UI/ModalForm";
import RegistrationForm from "./components/TooltipsAndPopovers/RegistrationForm";
import LoginForm from "./components/TooltipsAndPopovers/LoginForm";

const globalStyles = globalCss({
  body: { letterSpacing: "0.3px" },
  button: { letterSpacing: "0.5px" },
});

function App() {
  const darkMode = useDarkMode(false);
  globalStyles();

  // State Setup
  const [strength, setStrength] = useState(50);
  const [selectedFileUrl, setSelectedFileUrl] = useState();
  const [fileName, setFileName] = useState("Choose File");
  const [cards, setCards] = useState([]);
  const [generatedImages, setGeneratedImages] = useState([]);
  const [activeId, setActiveId] = useState();
  const [activeName, setActiveName] = useState();
  const [showAddImage, setShowAddImage] = useState(true);
  const [showLoading, setShowLoading] = useState(false);
  const [allRequirements, setAllrequirements] = useState(true);
  const [visible, setVisible] = useState(false);
  const [wantregister, setWantregister] = useState(false);
  const [userData, setUserData] = useState({ username: "", password: "", email: "" });
  const [loggedIn, setLoggedIn] = useState(false);


  useEffect(() => {
    searchMovies("Cyber").then((res) => setCards(res));
  }, []);

  const addActive = (id, name) => {
    setActiveId(id);
    setActiveName(name);
  };

  // & LoginForm
  const closeHandler = () => {    
    setVisible(false);
    setWantregister(false)
  };
  const loginModalHandler = () => {
    setVisible(true);
  };
  const logOutHandler = () => {
    setUserData(() =>{return { username: "", password: "", email: "" }} );
    setLoggedIn(false);
  }
  const openRegistrationHandler = () => {
    setWantregister(true);
  };
  
  const returnUserData = (userNameValue, passwordValue) => {
    setUserData(() => { return { username: userNameValue, userpassword: passwordValue } })
    setVisible(false);
    setLoggedIn(true);
  }

  //& Generated Images  
  const randomImage = async (selectedFileUrl) => {

    const inputBlob = await getBlob(selectedFileUrl);

    const outputBlob = await runFishInference({
      prompt: "",
      init_images: [await blobToBase64(inputBlob)],

      width: 512,
      height: 512,

      sampler_name: "Euler a",
      steps: 20,
      cfg_scale: 0,
      denoising_strength: strength / 1000,
    });
    return URL.createObjectURL(outputBlob);
  };
  const addGeneratedImage = async () => {
    setShowLoading(true);

    const generatedImg = await randomImage(selectedFileUrl);
    
    const newGeneratedData = {
      prompt: activeName,
      mysrc: generatedImg,
    };

    setGeneratedImages(generatedImages => ([newGeneratedData, ...generatedImages]));

    setShowAddImage(false);
    setShowLoading(false);

    console.log(`generatedImages ${generatedImages.toString}`)
    console.log(`Party Go is pressed & the value of strength is ${strength} and selectedfileUrl ${selectedFileUrl} activeId ${activeId} name ${activeName}`);
  };

  const onStrengthChange = (e) => {
    setStrength(e.target.value);
  };

  const fileChange = (e) => {
    if (e.target.files.length !== 0) {
      const file = e.target.files[0];
      /* if (selectedFileUrl !== undefined) addGeneratedImage(selectedFileUrl); */
      setSelectedFileUrl(URL.createObjectURL(file));
      setFileName(file.name);
      e.target.value = null;
      setShowAddImage(true);
    }
  };


  async function onPressGo() {
    if (!selectedFileUrl) return;

    setShowLoading(true);

    console.log(selectedFileUrl);

    const generatedImg = await runInference({ img_url: selectedFileUrl, strength: strength });

    const newGeneratedData = {
      prompt: activeName,
      mysrc: generatedImg,
    };

    setGeneratedImages(generatedImages => ([newGeneratedData, ...generatedImages]));

    setShowAddImage(false);
    setShowLoading(false);
  }

  return (
    <NextUIProvider theme={darkMode.value ? darkTheme : lightTheme}>
      <div className="body">
        <div className="wrapper">
          <Header onPressGoParty={addGeneratedImage} loginModalHandler={loginModalHandler} userData={userData} loggedIn={loggedIn} logOutHandler= {logOutHandler} />
          <CreatedImagesGallery
            generatedImages={generatedImages}
            selectedFileUrl={selectedFileUrl}
            fileName={fileName}
            onFileChange={fileChange}
            showAddImage={showAddImage}
            showLoading={showLoading}

          />
          <GenerationSettings
            selectedFileUrl={selectedFileUrl}
            fileName={fileName}
            onFileChange={fileChange}
            onStrength={onStrengthChange}
            strength={strength}
            onPress={onPressGo}
            showLoading={showLoading}
            allRequirements={allRequirements}
          />
          <Imagestyles
            cards={cards}
            onAddActive={addActive}
            activeId={activeId}
            activeName={activeName}
          />
        </div>
      </div>
      <ModalForm visible={visible} closeHandler={closeHandler}>
        {wantregister ? <RegistrationForm /> : <LoginForm openRegistrationHandler={openRegistrationHandler} returnUserData={returnUserData} />}
      </ModalForm>
    </NextUIProvider>
  );
}

export default App;
