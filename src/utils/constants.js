const defaultConfig = {
    formSelector: ".form",
    inputSelector: ".form__item",
    submitButtonSelector: ".form__submit",
    inactiveButtonClass: "form__submit_disabled",
    inputErrorClass: "form__type-error",
    errorClass: "popup__error_visible"
};

// Open Buttons
const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const avatarButton = document.querySelector('.profile__avatar-button');
// Forms
const formAdd = document.querySelector('.form_add');
const formEdit = document.querySelector('.form_edit');
const formAvatar = document.querySelector('.form_avatar');

// Inputs
const person = formEdit.querySelector('.form__item_input_name');
const job = formEdit.querySelector('.form__item_input_job');

export { defaultConfig, editButton, addButton, avatarButton, formAdd, formEdit, formAvatar, person, job };