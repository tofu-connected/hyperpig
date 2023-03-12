const StyleCards = ({ cards, onAddActive, activeId }) => {

    return (
        <div className="image-style-list">
            {
                cards?.length > 0 ? (
                    cards.map((item) => (
                        <div key={item.imdbID} className='image-cutter '>
                            <div onClick={() => onAddActive(item.imdbID, item.Title)}
                                className={`style-card ${activeId === item.imdbID ? "active" : "inactive"}`}

                            >
                                <img src={item.Poster !== 'N/A' ? item.Poster : 'https://via.placeholder.com/200'} alt={item.Year} />
                                <div className="style-card-name">
                                    {item.Title}
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