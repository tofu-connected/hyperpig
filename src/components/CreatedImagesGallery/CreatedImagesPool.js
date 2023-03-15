import { AddImageIcon } from '../ButtonsAndIcons/AddImageIcon';
import ImageContainer from './ImageContainer';

const CreatedImagesPool = ({
    generatedImages,
    onFileChange,
    selectedFileUrl,
    fileName,
}) => {
    return (
        <div className="images-pool">
            {generatedImages.length > 0 ? (
                generatedImages.map((item, index) => {
                    return (
                        <ImageContainer
                            key={"mywrap" + index}
                            orient={item.orientation}
                            src={item.src}
                            prompt={item.prompt}
                        />
                    );
                })
            ) : (
                <div className="img-wrap empty">
                    <label htmlFor="uploadimage">
                        <AddImageIcon />
                        <input
                            type="file"
                            onChange={onFileChange}
                            title={fileName}
                            name="uploadimage"
                            accept="image/png, image/gif, image/jpeg"
                        />
                    </label>
                    <img className="loaded-image" alt="" src={selectedFileUrl} />
                </div>
            )}
        </div>
    );
};

export default CreatedImagesPool;