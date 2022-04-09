import React from 'react';

function ImagePopup(props) {
    React.useEffect(() => {
        const popups = document.querySelector(`.popup_${props.name} `);
        if (props.isOpen) {
            popups.classList.add('popup_opened');
        } else {
            popups.classList.remove('popup_opened');
        }
    }, [props.isOpen]);

    return (
        <div className={`popup popup_${props.name}`}>
            <figure className="popup__figure">
                <div className="popup__image-button">
                    <button type="button" className="popup__close" onClick={props.onClose}/>
                </div>
                <img className="popup__image" alt={props.card.name} src={props.card.link} onClick={props.onClose}/>
                <figcaption className="popup__caption">{props.card.name}</figcaption>
            </figure>
        </div>
    );
}

export default ImagePopup;
