
function PopupImage({card, onClose, isOpen}) {
    return(
        <div className={`popup popup_type_image ${isOpen ? ("popup_opened") : ""}`}>
          <div className="popup__container">
            <button className="popup__close-button popup__close-button_type_full" type="button" aria-label="close" onClick={onClose} />
            <figure className="popup__figure">
              <img className="popup__image" src={card.link} alt="missing" />
              <figcaption className="popup__title">{card.name}</figcaption>
            </figure>
          </div>
      </div>
    )
}

export default PopupImage;