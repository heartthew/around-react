import React from 'react';
import editButton from '../images/edit-button.svg';
import {api} from '../utils/api.js';
import Card from './Card.js';
function Main({ handleCardClick, onEditAvatar, onEditProfile, onAddPlace, card }) {

  const [userName, setUserName] = React.useState("");
  const [userOccupation, setUserOccupation] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getUserInfo().then((result) => {
      setUserName(result.name);
      setUserOccupation(result.about);
      setUserAvatar(result.avatar);
    })
    api.getInitialCards().then((items) => {
      setCards(items);
    })
  });

  return (
    <main className="content">
      <section className="profile">
        <img className="profile__avatar" src={userAvatar} alt="Avatar" onClick={onEditAvatar} />
        <img className="profile__avatar-button" src={editButton} alt="Edit Avatar Button" />
        <div className="profile__info">
          <div className="profile__container">
            <h1 className="profile__name">{userName}</h1>
            <button className="profile__edit-button" aria-label="Edit" type="button" onClick={onEditProfile} />
          </div>
          <h2 className="profile__occupation">{userOccupation}</h2>
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
                handleCardClick={handleCardClick}
              />
            )
          })}
      </section>
    </main>
  );
}

export default Main;
  