import { Tooltip, Link, Text } from "@nextui-org/react";
import { useState, useEffect} from "react";

import { ChooseStyle } from "../TooltipsAndPopovers/ChooseStyle";
import StyleCards from "./StyleCards";

const API_URL = 'http://omdbapi.com?apikey=7ab3fcf5';

const ImageStyles = () => {
    
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
    
    return (
        <div className="image-style">
            
            <div className="tool-name">
                <Tooltip
                    trigger="hover"
                    placement="bottomEnd" content={<ChooseStyle />}>
                    <Link>
                        <Text color="secondary">STYLES</Text>
                    </Link>
                </Tooltip>
            </div>
        <div className="image-style-wrap">            
                <StyleCards cards={cards} />
        </div>    
        
        </div>
    )
}

export default ImageStyles