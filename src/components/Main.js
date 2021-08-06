import React from 'react';
import editButton from '../images/edit-button.svg';
import Card from './Card.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Main({ cards, onEditAvatar, onEditProfile, onAddPlace, onCardClick, onCardLike, onCardTrash }) {

  const currentUser = React.useContext(CurrentUserContext);

  return (
    <main className="content">
      <section className="profile">
        <img className="profile__avatar" src={currentUser.avatar} alt="Avatar" />
        <img className="profile__avatar-button" src={editButton} alt="Edit Avatar Button" onClick={onEditAvatar} />
        <div className="profile__info">
          <div className="profile__container">
            <h1 className="profile__name">{currentUser.name}</h1>
            <button className="profile__edit-button" aria-label="Edit" type="button" onClick={onEditProfile} />
          </div>
          <h2 className="profile__occupation">{currentUser.about}</h2>
        </div>
        <button className="profile__add-button" aria-label="Add" type="button" onClick={onAddPlace} />
      </section>
      <section className="elements">
        {cards.map(card => {
          return (
            <Card
              card={card}
              link={card.link}
              name={card.name}
              likes={card.likes}
              key={card._id}
              onCardClick={onCardClick}
              onCardLike={onCardLike}
              onCardTrash={onCardTrash}
            />
          )
        })}
      </section>
    </main>
  );
}

export default Main;
