function Card(props) {

    function handleClick() {
        props.onCardClick(props.card);
    }

    return (
        <>
            <article className="element">
                <img alt={props.card.name} className="element__image" src={props.card.link} onClick={handleClick}/>
                <button className="element__trash" type="button"/>
                <div className="element__information">
                    <h2 className="element__text">{props.card.name}</h2>
                    <div className="element__like-container">
                        <button type="button" className="element__like"/>
                        <span className="element__like-count">{props.card.likes.length}</span>
                    </div>
                </div>
            </article>
        </>
    )
}

export default Card;