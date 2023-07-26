import { useRef, useEffect} from 'react';
import { AddImageIcon } from '../ButtonsAndIcons/AddImageIcon';

export default function AddImage({ onFileChange, selectedFileUrl, fileName }) {
    const scollToRef = useRef();
    useEffect(() => {
        scollToRef.current.scrollIntoView({ behavior: "smooth" });
    }, [selectedFileUrl]);
    

    return (
        <div className="img-wrap empty" ref={scollToRef}>
            <label htmlFor="uploadimage">
                <AddImageIcon />
                <input
                    type="file"
                    onChange={(e) => onFileChange(e)}
                    title={fileName}
                    name="uploadimage"
                    accept="image/png, image/gif, image/jpeg"
                />
            </label>
            <img className="loaded-image" alt="" src={selectedFileUrl} />
        </div>
    )
}
