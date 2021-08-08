import React from "react";
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Card({ card, onCardClick, onCardTrash, onCardLike }) {
  const currentUser = React.useContext(CurrentUserContext);
  const isOwn = card.owner._id === currentUser._id;
  const isLiked = card.likes.some(i => i._id === currentUser._id);
  const cardTrashClassName = (
    `element__trash-button ${isOwn ? 'element__trash-button_visible' : 'element__trash-button_hidden'}`
  );
  const cardLikeClassName = (
    `element__like-button ${isLiked ? 'element__like-button element__like-button_active' : 'element__like-button'}`
  );

  function handleClick() {
    onCardClick(card);
  }
  function handleLike() {
    onCardLike(card);
  }
  function handleTrash() {
    onCardTrash(card);
  }

  return (
    <div className="element">
      <button className={cardTrashClassName} type="button" aria-label="Trash" onClick={handleTrash}></button>
      <img className="element__image" src={card.link} alt={card.name} onClick={handleClick} />
      <div className="element__label">
        <h2 className="element__title">{card.name}</h2>
        <div className="element__likes">
          <button className={cardLikeClassName} type="button" aria-label="Like" onClick={handleLike}></button>
          <p className="element__like-tally">{card.likes.length}</p>
        </div>
      </div>
    </div>
  )
}

export default Card;