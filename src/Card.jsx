const Card = ({id,imagePath}) => {
    const cardNo =id;
    return ( 
        <div className="card">
            <img src={imagePath}></img>
        </div>
     );
}
 
export default Card;