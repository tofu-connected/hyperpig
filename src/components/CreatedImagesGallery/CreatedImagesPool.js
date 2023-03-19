
import ImageContainer from './ImageContainer';
import AddImage from './AddImage';
import ImageLoading from './ImageLoading';

const CreatedImagesPool = ({
    generatedImages,
    onFileChange,
    selectedFileUrl,
    fileName, showAddImage,
    showLoading
}) => {
    return (
        <>
            <div className="images-pool">            
                {showAddImage && <AddImage onFileChange={onFileChange} selectedFileUrl={selectedFileUrl} fileName={fileName} />}
                {generatedImages.length > 0 &&
                    generatedImages.map((item, index) => {
                        return (
                            <ImageContainer
                                key={index}
                                src={item.src}
                                prompt={item.prompt}
                            />
                        );
                    })
                }            
            </div>
            {showLoading && <ImageLoading />}
        </>
    );
};

export default CreatedImagesPool;