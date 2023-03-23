
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
                                mysrc={item.mysrc}
                                myprompt={item.myprompt}
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