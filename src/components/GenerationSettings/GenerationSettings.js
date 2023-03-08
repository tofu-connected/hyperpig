import ChosenImage from './ChosenImage';
import StrengthSettings from './StrengthSettings';
import Go from './Go';

const GenerationSettings = ({ onFileChange, selectedFileUrl, fileName, onStrength, strength,  onPress }) => { 
    const goOnPress = async () => {
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
    };
    return (
        
        <div className="final-settings">
            <ChosenImage onFileChange={onFileChange} selectedFileUrl={selectedFileUrl} fileName={fileName} />            
            <StrengthSettings  onStrength = { onStrength } strength = {strength}><Go onPress={ onPress } /></StrengthSettings>
        </div>
    );
}

export default GenerationSettings;