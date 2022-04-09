import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import Main from "../Main";
import PopupWithForm from "../PopupWithForm";
import ImagePopup from "../ImagePopup";

function App() {
    const [isEditProfilePopupOpen, putEditProfile] = React.useState(false);
    const [isEditAvatarPopupOpen, putEditAvatar] = React.useState(false);
    const [isAddPlacePopupOpen, putAddCard] = React.useState(false);
    const [isImagePopupOpen, putImage] = React.useState(false);
    const [selectedCard, putSelectedCard] = React.useState([]);

    const handleEditAvatarClick = () => {
        putEditAvatar(true);
    }

    const handleEditProfileClick = () => {
        putEditProfile(true);
    }

    const handleAddPlaceClick = () => {
        putAddCard(true);
    }

    function handleCardClick(card) {
        putSelectedCard(card);
        putImage(true);
    }

    const closeAllPopups = () => {
        putAddCard(false);
        putEditAvatar(false);
        putEditProfile(false);
        putImage(false);
    }

    const handleSubmitForm = (evt) => {
        evt.preventDefault();
        closeAllPopups();
    }

    return (
        <div>
            <div className="page">
                <Header/>
                <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick}
                      onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick}/>
                <Footer/>
            </div>
            <PopupWithForm name="edit" title="Редактировать профиль" button="Сохранить" isOpen={isEditProfilePopupOpen}
                           onEditProfile={handleEditProfileClick} onClose={closeAllPopups}
                           onSubmitForm={handleSubmitForm}>
                <input type="text" value="" name="name" className="popup__input" id="name" minLength="2" maxLength="40"
                       required/>
                <span id="error-name" className="error"/>
                <input type="text" value="" name="description" className="popup__input" id="description" minLength="2"
                       maxLength="200" required/>
                <span id="error-description" className="error"/>
                <button type="submit" className="popup__save" value="Сохранить">Сохранить</button>
            </PopupWithForm>
            <PopupWithForm name="edit-avatar" title="Обновить Аватар" button="Сохранить" isOpen={isEditAvatarPopupOpen}
                           openEditAvatar={handleEditAvatarClick} onClose={closeAllPopups}
                           onSubmitForm={handleSubmitForm}>
                <input type="url" value="" name="avatar" className="popup__input" id="avatar" required
                       placeholder="Ссылка на картинку"/>
                <span id="error-avatar" className="error"/>
                <button type="submit" className="popup__save" value="Сохранить">Сохранить</button>
            </PopupWithForm>
            <PopupWithForm name="add" title="Новое место" button="Создать" isOpen={isAddPlacePopupOpen}
                           openAddPlace={handleAddPlaceClick} onClose={closeAllPopups} onSubmitForm={handleSubmitForm}>
                <input required type="text" value="" name="name" className="popup__input" id="cardName"
                       placeholder="Название" minLength="2" maxLength="30"/>
                <span id="error-cardName" className="error"/>
                <input required type="url" value="" name="description" className="popup__input" id="link"
                       placeholder="Ссылка на картинку"/>
                <span id="error-link" className="error"/>
                <button type="submit" className="popup__save" value="Создать">Создать</button>
            </PopupWithForm>
            <PopupWithForm name="delete-card" title="Вы уверены?" button="Да" onClose={closeAllPopups}>
                <button type="submit" className="popup__save" value="Да">Да</button>
            </PopupWithForm>
            <ImagePopup name="photo" onClose={closeAllPopups} isOpen={isImagePopupOpen} card={selectedCard}/>
        </div>
    );
}

export default App;
