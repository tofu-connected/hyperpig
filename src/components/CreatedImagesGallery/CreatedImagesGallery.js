import CreatedImagesPool from './CreatedImagesPool';
import { ImageRatioButton } from '../ButtonsAndIcons/ImageRatioButton';

function importAll(r) {
  let images = {};
  r.keys().map((item) => (images[item.replace('./', '')] = r(item)));
  return images;
}
const images = importAll(require.context("../../img", false, /\.(png|jpe?g|svg)$/));

const CreatedImagesGallery = ({onFileChange, selectedFileUrl, fileName}) => {
  const generatedImages = [{
    prompt: "military angel relaxing in a bingbag",
    src: images["6.png"],
    orientation: "vertical"
  },
  {
    prompt: "boom glashing eyes colorful head",
    src: images["13.jpg"],
    orientation: "notvertical"
  }
  ]
  return (
    <div className="transformed-images">
      <CreatedImagesPool list={generatedImages} onFileChange={onFileChange} selectedFileUrl={selectedFileUrl} fileName={fileName}/>
      <ImageRatioButton />
    </div>
  )
}

export default CreatedImagesGallery