import CreatedImagesPool from './CreatedImagesPool';
import { ImageRatioButton } from '../ButtonsAndIcons/ImageRatioButton';

const CreatedImagesGallery = ({ generatedImages, onFileChange, selectedFileUrl, fileName, showAddImage }) => {
  return (
    <div className="transformed-images">
      <CreatedImagesPool
        generatedImages={generatedImages}
        onFileChange={onFileChange}
        selectedFileUrl={selectedFileUrl}
        fileName={fileName}
        showAddImage={showAddImage}
      />
      <ImageRatioButton />
    </div>
  );
}

export default CreatedImagesGallery