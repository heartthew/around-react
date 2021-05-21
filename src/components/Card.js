function Card(props) {

    function handleClick() {
        props.handleCardClick(props.card);
      }  

    return(
      <div className="element"> 
        <button className="element__trash-button" type="button" aria-label="Trash"></button>
        <img className="element__image" src={props.link} alt="missing" onClick={handleClick} /> 
        <div className="element__label">
          <h2 className="element__title">{props.name}</h2>
            <div className="element__likes">
              <button className="element__like-button" type="button" aria-label="Like"></button>
              <p className="element__like-tally">{props.likes.length}</p>
            </div>
        </div>
      </div>
    )
}

export default Card;