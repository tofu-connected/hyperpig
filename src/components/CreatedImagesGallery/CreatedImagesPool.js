import { AddImageIcon } from "../ButtonsAndIcons/AddImageIcon.js";
import ImageContainer from "./ImageContainer.js";

function importAll(r) {
    let images = {};
    r.keys().map((item) => (images[item.replace('./', '')] = r(item)));
    return images;
}

const images = importAll(require.context("../../img", false, /\.(png|jpe?g|svg)$/));

const CreatedImagesPool = () => {
    const list = [{
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
        <div className="images-pool">
            <div className="img-wrap empty">
                <label htmlFor="uploadimage">
                    <AddImageIcon />
                    <input type="file" name="uploadimage" accept="image/png, image/gif, image/jpeg" />
                </label>
            </div>
            {list.map((item, index) => {
                return (
                    <ImageContainer key={"mywrap" + index} orient={item.orientation} src={item.src} prompt={item.prompt} />
                )
            })}
        </div>
    )
}
export default CreatedImagesPool