import ChosenImage from './ChosenImage';
import StrengthSettings from './StrengthSettings';
import Go from './Go';

const GenerationSettings = ({ onFileChange, selectedFileUrl, fileName, onStrength, strength,  onPress, showLoading, allRequirements }) => { 
    
    return (
        
        <div className="final-settings">
            <ChosenImage onFileChange={onFileChange} selectedFileUrl={selectedFileUrl} fileName={fileName} />            
            <StrengthSettings onStrength={onStrength} strength={strength}><Go onPress={onPress} showLoading={showLoading} allRequirements={allRequirements} /></StrengthSettings>
        </div>
    );
}

export default GenerationSettings;