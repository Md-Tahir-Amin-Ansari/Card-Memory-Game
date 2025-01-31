import Card from "./Card";

const Grid = () => {
    function getCardPairs() {
        const cards = new Set();
        
        // Keep generating numbers until we have exactly 6 unique ones
        while (cards.size < 6) {
            cards.add(Math.floor(Math.random() * 54) + 1);
        }
    
        // Duplicate each number to form pairs
        const pairedcards = [...cards, ...cards];
    
        // Shuffle the array using Fisher-Yates algorithm
        for (let i = pairedcards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [pairedcards[i], pairedcards[j]] = [pairedcards[j], pairedcards[i]];
        }
    
        return pairedcards;
    }

    const cards = getCardPairs();
    console.log(cards)
    

    return ( 
        <div className="grid">
            {
                cards.map(card => (
                    <Card id={card} imagePath={`src/assets/cards/${card}.webp`} />
                ))
                
            }
        </div>
     );
}
 
export default Grid;