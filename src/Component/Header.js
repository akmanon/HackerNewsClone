import React from 'react';
import { Link } from "react-router-dom";
import Style from "../Styles/App.module.css";

const Header = () => {
    return (
        <div className={Style.header_wrap}>
            <Link to="/" className={Style.link}>Hacker News Clone</Link>
            <Link to="/newest/" className={Style.link}>new</Link>
            <Link to="/best/" className={Style.link}>| best</Link>
            <Link to="/ask/" className={Style.link}>| ask</Link>
            <Link to="/show/" className={Style.link}>| show</Link>
            <Link to="/job/" className={Style.link}>| jobs</Link>
        </div>
    );
};

export default Header;