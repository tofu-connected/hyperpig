import { AddImageIcon } from '../ButtonsAndIcons/AddImageIcon';
import ImageContainer from './ImageContainer';

const CreatedImagesPool = ({list, onFileChange, selectedFileUrl, fileName}) => {
    

    return (
        <div className="images-pool">
            <div className="img-wrap empty">
                <label htmlFor="uploadimage">
                    <AddImageIcon/>
                    <input type="file" onChange={onFileChange} title={fileName}name="uploadimage" accept="image/png, image/gif, image/jpeg" />
                </label>
                <img className="loaded-image" alt="" src={selectedFileUrl} />
            </div>
            {list.map((item, index) => {
                return (
                    <ImageContainer key={"mywrap" + index} orient={item.orientation} src={item.src} prompt={item.prompt} />
                )
            })}
        </div>
    )
}
export default CreatedImagesPool;