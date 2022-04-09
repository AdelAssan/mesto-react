import React from "react";
import api from "../utils/Api";
import Card from "./Card";

function Main(props) {

    const [userName, putUserName] = React.useState('');
    const [userDescription, putUserDescription] = React.useState('');
    const [userAvatar, changeAvatar] = React.useState();
    const [cards, putCards] = React.useState([]);

    React.useEffect(() => {
        api.getProfile()
            .then(data => {
                putUserName(data.name);
                putUserDescription(data.about);
                changeAvatar(data.avatar);
            })
            .catch(error => console.log(error));
    }, []);

    React.useEffect(() => {
        api.getInitialCards()
            .then(putCards)
            .catch(error => console.log(error));
    }, []);

    return (
        <main className="content">
            <section className="profile">
                <div className="profile__avatar">
                    <a href="#" className="profile__photo-edit">
                        <button type="button" className="profile__photo-button" onClick={props.onEditAvatar}/>
                        <div className="profile__photo" style={{backgroundImage: `url(${userAvatar})`}}/>
                    </a>
                    <div className="profile__info">
                        <div className="profile__edit">
                            <h1 className="profile__name">{userName}</h1>
                            <button type="button" className="profile__edit-button" onClick={props.onEditProfile}/>
                        </div>
                        <p className="profile__description">{userDescription}</p>
                    </div>
                </div>
                <button type="button" className="profile__add-button" onClick={props.onAddPlace}/>
            </section>
            <section className="elements">
                {cards ? Array.from(cards).map((card) => {
                    return (<Card card={card}
                                  key={card._id}
                                  onCardClick={props.onCardClick}
                                  name={card.name}
                                  link={card.link}
                                  likes={card.likes}
                    />)
                }) : []}
            </section>
        </main>
    );
}

export default Main;