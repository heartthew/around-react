import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm.js';
import PopupImage from './PopupImage.js';
import '../index.css';

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isConfirmPopupOpen, setIsConfirmPopupOpen] = React.useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleTrashClick() {
    setIsConfirmPopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
    setIsImagePopupOpen(true);
    }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsConfirmPopupOpen(false);
    setIsImagePopupOpen(false);
  }

  return (
  <div className="root__page-container">
    <Header />
    <Main 
      onEditAvatar={handleEditAvatarClick}
      onEditProfile={handleEditProfileClick}
      onAddPlace={handleAddPlaceClick}
      handleTrashClick={handleTrashClick}
      handleCardClick={handleCardClick}
    />
    <PopupWithForm
      name="add"
      title="New Place"
      submitButton="Create"
      isOpen={isAddPlacePopupOpen}
      onClose={closeAllPopups}
    > <fieldset className="form__input-container">
        <input className="form__item form__item_input_title" id="title" required minLength={1} maxLength={30} name="name" placeholder="Title" type="text" />
        <span className="form__type-error" id="title-error" />
        <input className="form__item form__item_input_image" id="image-link" required minlenght={2} name="link" placeholder="Image link" type="url" />
        <span className="form__type-error" id="image-link-error" />
      </fieldset>
    </PopupWithForm>

    <PopupWithForm
      name="avatar"
      title="Change profile picture"
      submitButton="Save"
      isOpen={isEditAvatarPopupOpen}
      onClose={closeAllPopups}
    > <fieldset className="form__input-container">
        <input className="form__item form__item_input_image" id="avatar-link" required minLength={2} name="link" placeholder="Image link" type="url" />
        <span className="form__type-error" id="avatar-link-error" />
      </fieldset>
    </PopupWithForm>

    <PopupWithForm
      name="edit"
      title="Edit Profile"
      submitButton="Save"
      isOpen={isEditProfilePopupOpen}
      onClose={closeAllPopups}
    >
      <fieldset className="form__input-container">
        <input className="form__item form__item_input_name" id="user" required minLength={2} maxLength={40} name="user" placeholder="Name" type="text" />
        <span className="form__type-error" id="user-error" />
        <input className="form__item form__item_input_job" id="job" required minLength={2} maxLength={200} name="job" placeholder="Occupation" type="text" />
        <span className="form__type-error" id="job-error" />
      </fieldset>
    </PopupWithForm>

    <PopupWithForm
      name="confirm"
      title="Are you sure?"
      submitButton="Yes"
      isOpen={isConfirmPopupOpen}
      onClose={closeAllPopups}
    />

    <PopupImage
      card={selectedCard}
      isOpen={isImagePopupOpen}
      onClose={closeAllPopups}
    />
    <Footer />
  </div>
  );
}

export default App;
