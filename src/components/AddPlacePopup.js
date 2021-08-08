import React from "react";
import PopupWithForm from "./PopupWithForm.js";

function AddPlacePopup(props) {
  const [name, setName] = React.useState('');
  const [link, setLink] = React.useState('');

  function handleName(e) {
    setName(e.target.value);
  }

  function handleLink(e) {
    setLink(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    props.onAddPlace({
      name,
      link
    });
  }

  React.useEffect(() => {
    setName('');
    setLink('');
  }, [props.isOpen])

  return (
    <PopupWithForm
      isOpen={props.isOpen}
      name={`add`}
      title={`New Place`}
      submitButton={`Create`}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <input
        id="title"
        type="text"
        className="form__item form__item_input_image"
        name="name"
        placeholder="Title"
        minLength={1}
        maxLength={30}
        value={name}
        onChange={handleName}
        required
      />
      <span id="title-error" className="form__type-error"></span>

      <input
        id="avatar-link"
        type="url"
        className="form__item form__item_input_image"
        name="link"
        placeholder="Image link"
        value={link}
        onChange={handleLink}
        required
      />
      <span id="image-link-error" className="form__type-error"></span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;