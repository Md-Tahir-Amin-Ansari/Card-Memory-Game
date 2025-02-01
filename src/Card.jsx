import { useState } from "react";
import ReactCardFlip from "react-card-flip";

const Card = ({id,imagePath}) => {
    const cardNo =id;
    const [flip, setFlip] = useState(true);
    const handleClick = () => {
        setFlip(!flip);
    };
    return ( 
        <ReactCardFlip isFlipped={flip} flipDirection="horizontal">
            <div className="card" onClick={handleClick}>
                <img src={imagePath}></img>
            </div>
            <div className="card" onClick={handleClick}>
                <img src='src/assets/back/back.webp'></img>
            </div>
        </ReactCardFlip>
     );
}
 
export default Card;