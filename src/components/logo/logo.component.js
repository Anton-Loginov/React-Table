import React from 'react';
import Logo from '../../images/Vector.png';

import './logo.scss';

export const LogoComponent = () => {
    return (
        <div className="logo">
            <img src={Logo} alt="header"/>
        </div>
    );
}
