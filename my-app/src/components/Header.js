import logo from "../images/header-logo.svg";
import React from "react";

function Header() {
    return (<>
        <header className="header">
            <img alt="Логотип" className="header__logo" src={logo}/>
        </header>
    </>);
}

export default Header;