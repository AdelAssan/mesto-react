import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import Main from "../Main";
import PopupWithForm from "../PopupWithForm";
import ImagePopup from "../ImagePopup";

function App() {
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);
    const [selectedCard, setIsSelectedCard] = React.useState({});

    const handleEditAvatarClick = () => {
        setIsEditAvatarPopupOpen(true);
    }

    const handleEditProfileClick = () => {
        setIsEditProfilePopupOpen(true);
    }

    const handleAddPlaceClick = () => {
        setIsAddPlacePopupOpen(true);
    }

    function handleCardClick(card) {
        setIsSelectedCard(card);
        setIsImagePopupOpen(true);
    }

    const closeAllPopups = () => {
        setIsAddPlacePopupOpen(false);
        setIsEditAvatarPopupOpen(false);
        setIsEditProfilePopupOpen(false);
        setIsImagePopupOpen(false);
    }

    return (
        <div>
            <div className="page">
                <Header/>
                <Main onEditProfile={handleEditProfileClick}
                      onAddPlace={handleAddPlaceClick}
                      onEditAvatar={handleEditAvatarClick}
                      onCardClick={handleCardClick}/>
                <Footer/>
            </div>
            <PopupWithForm name="edit" title="Редактировать профиль" button="Сохранить"
                           isOpen={isEditProfilePopupOpen}
                           onEditProfile={handleEditProfileClick}
                           onClose={closeAllPopups}>
                <input type="text" name="name" className="popup__input" id="name" minLength="2" maxLength="40" placeholder="Имя"
                       required/>
                <span id="error-name" className="error"/>
                <input type="text" name="description" className="popup__input" id="description" minLength="2" placeholder="Занятие"
                       maxLength="200" required/>
                <span id="error-description" className="error"/>
            </PopupWithForm>
            <PopupWithForm name="edit-avatar" title="Обновить Аватар" button="Сохранить"
                           isOpen={isEditAvatarPopupOpen}
                           openEditAvatar={handleEditAvatarClick}
                           onClose={closeAllPopups}>
                <input type="url" name="avatar" className="popup__input" id="avatar" required
                       placeholder="Ссылка на картинку"/>
                <span id="error-avatar" className="error"/>
            </PopupWithForm>
            <PopupWithForm name="add" title="Новое место" button="Создать"
                           isOpen={isAddPlacePopupOpen}
                           openAddPlace={handleAddPlaceClick}
                           onClose={closeAllPopups}>
                <input required type="text" name="name" className="popup__input" id="cardName"
                       placeholder="Название" minLength="2" maxLength="30"/>
                <span id="error-cardName" className="error"/>
                <input required type="url" name="description" className="popup__input" id="link"
                       placeholder="Ссылка на картинку"/>
                <span id="error-link" className="error"/>
            </PopupWithForm>
            <PopupWithForm name="delete-card" title="Вы уверены?" button="Да" onClose={closeAllPopups}/>
            <ImagePopup name="photo"
                        onClose={closeAllPopups}
                        isOpen={isImagePopupOpen}
                        card={selectedCard}/>
        </div>
    );
}

export default App;
