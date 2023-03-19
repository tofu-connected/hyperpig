import CreatedImagesPool from './CreatedImagesPool';
import { ImageRatioButton } from '../ButtonsAndIcons/ImageRatioButton';

const CreatedImagesGallery = ({ generatedImages, onFileChange, selectedFileUrl, fileName, showAddImage, showLoading }) => {
  return (
    <div className="transformed-images">
      <CreatedImagesPool
        generatedImages={generatedImages}
        onFileChange={onFileChange}
        selectedFileUrl={selectedFileUrl}
        fileName={fileName}
        showAddImage={showAddImage}
        showLoading={showLoading}
      />
      <ImageRatioButton />
    </div>
  );
}

export default CreatedImagesGallery