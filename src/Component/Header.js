import React from 'react';
import { Link } from "react-router-dom";
import Style from "../Styles/App.module.css";

const Header = () => {
    return (
        <div className={Style.header_wrap}>
            <Link to="/" className={Style.link}>Minimal Hacker News</Link>
            <Link to="/newest/" className={Style.link}>new</Link>
            <Link to="/best/" className={Style.link}>| best</Link>
            <Link to="/" className={Style.link}>| top</Link>
        </div>
    );
};

export default Header;