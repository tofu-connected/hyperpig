const StyleCards = ({ cards, onAddActive, activeId }) => {

    return (
        <div className="image-style-list">
            {
                cards?.length > 0 ? (
                    cards.map((item) => (
                        <div key={item.id} className='image-cutter '>
                            <div onClick={() => onAddActive(item.id, item.name)}
                                className={`style-card ${activeId === item.id ? "active" : "inactive"}`}

                            >
                                <img src={item.card_img} alt={item.name} />
                                <div className="style-card-name">
                                    {item.name}
                                </div>
                            </div>
                        </div>
                    ))
                ) : (<p>Something went wrong. No Styles!</p>)
            }
        </div>
    )
}

export default StyleCards