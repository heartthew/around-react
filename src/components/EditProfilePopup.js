import React from "react";
import PopupWithForm from "./PopupWithForm.js";
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function EditProfilePopup(props) {
  const [name, setName] = React.useState('');
  const [job, setJob] = React.useState('');
  const thisUser = React.useContext(CurrentUserContext);

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleJobChange(e) {
    setJob(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateUser({
      name,
      about: job,
    });
  }

  React.useEffect(() => {
    setName(thisUser.name);
    setJob(thisUser.about);
  }, [thisUser, props.isOpen])

  return (
    <PopupWithForm
      isOpen={props.isOpen}
      onSubmit={handleSubmit}
      name={`edit`}
      title={`Edit Profile`}
      submitButton={`Save`}
      onClose={props.onClose}
    >
      <input
        id="user"
        type="text"
        className="form__item form__item_input_name"
        name="user"
        placeholder="Name"
        minLength={2}
        maxLength={40}
        onChange={handleNameChange}
        value={name || ''}
        required
      />
      <span id="user-error" className="form__type-error"></span>

      <input
        id="job"
        type="text"
        className="form__item form__item_input_job"
        name="job"
        placeholder="Occupation"
        minLength={2}
        maxLength={200}
        onChange={handleJobChange}
        value={job || ''}
        required
      />
      <span id="job-error" className="form__type-error"></span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;