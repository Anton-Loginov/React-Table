import React from 'react';

import {UserInfo} from '../user-info';
import {LogoComponent} from '../logo';

import './header.scss';

export const Header = () => {
    return (
        <section className="header">
            <LogoComponent />
            <UserInfo />
        </section>
    );
}
