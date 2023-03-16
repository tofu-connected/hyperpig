
import ImageContainer from './ImageContainer';
import AddImage from './AddImage';
const CreatedImagesPool = ({
    generatedImages,
    onFileChange,
    selectedFileUrl,
    fileName, showAddImage
}) => {
    return (
        <div className="images-pool">
            {showAddImage && <AddImage onFileChange={onFileChange} selectedFileUrl={selectedFileUrl} fileName={fileName} />}
            {generatedImages.length > 0 &&
                generatedImages.map((item, index) => {
                    return (
                        <ImageContainer
                            key={"mywrap" + index}
                            src={item.src}
                            prompt={item.prompt}
                        />
                    );
                })

            }
        </div>
    );
};

export default CreatedImagesPool;