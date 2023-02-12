import CreatedImagesPool from './CreatedImagesPool';
import { ImageRatioButton } from '../ButtonsAndIcons/ImageRatioButton';

const CreatedImagesGallery = () => {

  return (
    <div className="transformed-images">
      <CreatedImagesPool />
      <ImageRatioButton />
    </div>
  )
}

export default CreatedImagesGallery