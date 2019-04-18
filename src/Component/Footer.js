import React from 'react';
import Style from "../Styles/App.module.css";

const Footer = () => {
    return (
        <div className={Style.footer}>
            <footer>Made with <span>❤</span> by <a href="https://github.com/akmanon" rel="noopener noreferrer" target="_blank">Ashish</a></footer>
        </div>
    );
};

export default Footer;