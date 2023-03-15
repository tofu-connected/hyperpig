import CreatedImagesPool from './CreatedImagesPool';
import { ImageRatioButton } from '../ButtonsAndIcons/ImageRatioButton';

const CreatedImagesGallery = ({ generatedImages, onFileChange, selectedFileUrl, fileName }) => {
  return (
    <div className="transformed-images">
      <CreatedImagesPool
        generatedImages={generatedImages}
        onFileChange={onFileChange}
        selectedFileUrl={selectedFileUrl}
        fileName={fileName}
      />
      <ImageRatioButton />
    </div>
  );
}

export default CreatedImagesGallery