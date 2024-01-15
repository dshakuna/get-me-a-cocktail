import { useState } from "react";
import './Footer.scss'; 

const Footer = () => {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(!isActive);
    };

    return (
        <footer className="footer">
            
            <button className={`footer-button ${isActive ? 'active' : ''}`} onClick={handleClick}>
                {isActive ? 'Activo' : 'Inactivo'}
            </button>
        </footer>
    );
};

export default Footer;
