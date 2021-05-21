function Card({card, selectedCard, handleCardClick, handleTrashClick}) {

     function handleClick() {
        handleCardClick(card);
      }  
    function handleTrash() {
        handleTrashClick(selectedCard);
      }   

    return(
      <div className="element"> 
        <button className="element__trash-button" type="button" aria-label="Trash" onClick={handleTrash}></button>
        <img className="element__image" src={card.link} alt="missing" onClick={handleClick} /> 
        <div className="element__label">
          <h2 className="element__title">{card.name}</h2>
            <div className="element__likes">
              <button className="element__like-button" type="button" aria-label="Like"></button>
              <p className="element__like-tally">{card.likes.length}</p>
            </div>
        </div>
      </div>
    )
}

export default Card;