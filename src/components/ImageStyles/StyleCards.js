import { useState, useEffect } from 'react';

//7ab3fcf5
const API_URL = 'http://omdbapi.com?apikey=7ab3fcf5';


const StyleCards = () => {
    const [cards, setCards] = useState([]);
    
    //USING OMDB API
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json();
        setCards(data.Search);
    }
    useEffect(() => {
        searchMovies('Cyber');
    }, []);

    const [activeId, setActiveId] = useState();

    return (
        <div className="image-style-list">
            {
                cards?.length > 0 ? (
                    cards.map((item) => (
                        <div key={item.imdbID} className='image-cutter '>
                            <div onClick={() => setActiveId(item.imdbID)}
                                className={`style-card ${activeId === item.imdbID ? "active" : "inactive"}`}
                                
                            >
                                <img src={item.Poster !== 'N/A' ? item.Poster : 'https://via.placeholder.com/200'} alt={item.Year} />
                                <div className="style-card-name">
                                    {item.Title}
                                </div>
                            </div>
                        </div>
                    ))
                ):(<p>Something went wrong. No Styles!</p>)
            }
        </div>
    )
}

export default StyleCards