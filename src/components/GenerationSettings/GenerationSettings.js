import ChosenImage from './ChosenImage';
import StrengthSettings from './StrengthSettings';
import Go from './Go';

const GenerationSettings = ({ onFileChange, selectedFileUrl, fileName, onStrength, strength,  onPress }) => { 
    
    return (
        
        <div className="final-settings">
            <ChosenImage onFileChange={onFileChange} selectedFileUrl={selectedFileUrl} fileName={fileName} />            
            <StrengthSettings  onStrength = { onStrength } strength = {strength}><Go onPress={ onPress } /></StrengthSettings>
        </div>
    );
}

export default GenerationSettings;