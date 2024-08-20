import React from 'react';
import '../Style/WhatsAppIcon.css'; 
import whatsapp from "../images/whatsapp.svg"

const WhatsAppIcon = () => {
    return (
        <div className="whatsapp-icon">
            <a href="https://wa.me/9909332101" target="_blank" rel="noopener noreferrer">
                <img src={whatsapp} alt=""  width={50}/>
            </a>
        </div>
    );
};

export default WhatsAppIcon;