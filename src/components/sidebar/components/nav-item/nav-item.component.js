import React from 'react';

import './nav-item.scss';

export const NavItem = ({icon, link}) => {
    if (icon) {
        return (
            <li className="nav-item">
                <a className="nav-item__link" href={link}>
                    <img src={icon} alt="main nav"/>
                </a>
            </li>
        );
    }

    return null;
}
