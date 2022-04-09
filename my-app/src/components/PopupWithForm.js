import React from 'react';

function PopupWithForm(props) {

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
            <div className="popup__close-button">
                <button onClick={props.onClose} type="button" className="popup__close"/>
            </div>
            <div className="popup__container">
                <h2 className="popup__title">{props.title}</h2>
                <form name={props.name} className="popup__form">
                    {props.children}
                </form>
            </div>
        </div>
    );
}


export default PopupWithForm;