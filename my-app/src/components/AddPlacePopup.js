import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {
    const [name, setName] = React.useState("");
    const [link, setLink] = React.useState("");

    //const [errors, setErrors] = React.useState({nameError: '', linkError: ''});

    function handleSubmit(evt) {
        evt.preventDefault();
        props.onAddPlace({name, link})
            .then(() => {
                handleCardReset();
            })
    }

    function handleChangeName(evt) {
        setName(evt.target.value);
        //const name = evt.target.name;
        //const message = evt.target.validationMessage
        //setErrors({...errors, [name] : message});
    }

    function handleChangeLink(evt) {
        setLink(evt.target.value);
    }

    function handleCardReset() {
        props.onClose();
        setName("");
        setLink("");
    }

    return (
        <PopupWithForm name="add" title="Новое место" button="Создать" loadingButton="Сохранение..."
                       isOpen={props.isOpen}
                       onClose={handleCardReset}
                       onSubmit={handleSubmit}
                       loadingInfo={props.loadingInfo}>
            <input required type="text" name="name" className="popup__input" id="cardName"
                   placeholder="Название" minLength="2" maxLength="30" onChange={handleChangeName} value={name}/>
            <span id="error-cardName" className="error"/>
            <input required type="url" name="description" className="popup__input" id="link"
                   placeholder="Ссылка на картинку" onChange={handleChangeLink} value={link}/>
            <span id="error-link" className="error"/>
        </PopupWithForm>
    )
}

export default AddPlacePopup;