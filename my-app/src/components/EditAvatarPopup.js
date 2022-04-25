import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {
    const inputRef = React.useRef();

    function handleSubmit(evt) {
        evt.preventDefault();

        props.onUpdateAvatar({
            avatar: inputRef.current.value
        })
            .then(() => {
                handleCloseReset();
            })
    }

    function handleCloseReset() {
        props.onClose();
        inputRef.current.value = "";
    }

    return (
        <PopupWithForm name="edit-avatar" title="Обновить Аватар" button="Сохранить" loadingButton="Сохранение..."
                       isOpen={props.isOpen}
                       onClose={handleCloseReset}
                       onSubmit={handleSubmit}
                       loadingInfo={props.loadingInfo}>
            <input type="url" name="avatar" className="popup__input" id="avatar" required
                   placeholder="Ссылка на картинку" ref={inputRef}/>
            <span id="error-avatar" className="error"/>
        </PopupWithForm>
    )
}

export default EditAvatarPopup;