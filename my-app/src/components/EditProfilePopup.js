import React from "react";
import PopupWithForm from "./PopupWithForm";
import CurrentUserContext from "../contexts/CurrentUserContext";

function EditProfilePopup(props) {
    const currentUser = React.useContext(CurrentUserContext);
    const [name, setName] = React.useState('');
    const [description, setDescription] = React.useState('');

    function handleChangeName(evt) {
        setName(evt.target.value);
    }

    function handleChangeDescription(evt) {
        setDescription(evt.target.value);
    }

    React.useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about);
    }, [currentUser, props.isOpen]);

    function handleSubmit(evt) {
        evt.preventDefault();
        props.onUpdateUser({
            name,
            about: description,
        });
    }

    return (
        <PopupWithForm name="edit" title="Редактировать профиль" button="Сохранить" loadingButton="Сохранение..."
                       isOpen={props.isOpen}
                       onClose={props.onClose}
                       onSubmit={handleSubmit}
                       loadingInfo={props.loadingInfo}>
            <input type="text" name="name" className="popup__input" id="name" minLength="2" maxLength="40"
                   placeholder="Имя"
                   required onChange={handleChangeName} value={name || ""}/>
            <span id="error-name" className="error"/>
            <input type="text" name="description" className="popup__input" id="description" minLength="2"
                   placeholder="Занятие"
                   maxLength="200" required onChange={handleChangeDescription} value={description || ""}/>
            <span id="error-description" className="error"/>
        </PopupWithForm>
    )
}

export default EditProfilePopup;