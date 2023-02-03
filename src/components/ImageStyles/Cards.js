function importAll(r) {
    let images = {};
    r.keys().map((item) => ( images[item.replace('./', '')] = r(item) ));
    return images;
}
const images = importAll(require.context('../../img', false, /\.(png|jpe?g|svg)$/));

const Cards = () => {
    const list = [
        {
            title: "Cat",
            src: images["1.png"]
        },
        {
            title: "Dog",
            src: images["2.jpg"]
        },
        {
            title: "Pig",
            src: images["3.jpg"]
        },
        {
            title: "Fox",
            src: images["4.jpg"]
        },
        {
            title: "Wolf",
            src: images["5.jpg"]
        },
        {
            title: "Hammer",
            src: images["6.png"]
        },
        {
            title: "Mouse",
            src: images["7.png"]
        },
        {
            title: "Cow",
            src: images["8.png"]
        },
        {
            title: "Panda",
            src: images["9.jpg"]
        },
        {
            title: "Bunny",
            src: images["10.png"]
        },
        {
            title: "Teddy",
            src: images["11.jpg"]
        },
        {
            title: "Hog",
            src: images["12.png"]
        },
        {
            title: "Coyote",
            src: images["13.jpg"]
        },
        {
            title: "Bug",
            src: images["14.jpg"]
        },
        {
            title: "Spider",
            src: images["15.jpg"]
        },
        {
            title: "Bird",
            src: images["16.jpg"]
        },
        {
            title: "Fish",
            src: images["17.png"]
        },
        {
            title: "Bacteria178908989",
            src: images["18.jpg"]
        },
    ];
    return (
        <div className="image-style-list">
            {list.map((item, index) => (
                <div key={index}  className="image-cutter">
                <div className="style-card">
                    <img src={item.src} alt=""/>
                    <div className="style-card-name">
                        {item.title}
                    </div>
                </div>
            </div>
                
            ))}
        </div>
    )
}

export default Cards