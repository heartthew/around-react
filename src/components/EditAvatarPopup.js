import React from "react";
import PopupWithForm from "./PopupWithForm.js";

function EditAvatarPopup(props) {
    const avatarRef = React.useRef('');

    function handleSubmit(e) {
        e.preventDefault();
        props.onUpdateAvatar(avatarRef.current.value);
        avatarRef.current.value = '';
    }

    return (
        <PopupWithForm
            isOpen={props.isOpen}
            name={`avatar`}
            title={`Change Profile Picture`}
            submitButton={`Save`}
            onSubmit={handleSubmit}
            onClose={props.onClose}
        >
            <input
                ref={avatarRef}
                id="avatar-link"
                type="url"
                className="form__item form__item_input_image"
                name="link"
                placeholder="Image link"
                minLength={2}
                required
            />
            <span id="avatar-link-error" className="form__type-error"></span>
        </PopupWithForm>
    );
}

export default EditAvatarPopup;