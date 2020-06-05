import React from 'react';
import {NavItem} from "./components/nav-item";

import FolderIcon from '../../images/folder.png'

import './sidebar.scss';

const NAV_CONFIG = [
    {icon: FolderIcon, link: '/'},
    {icon: FolderIcon, link: '/'},
    {icon: FolderIcon, link: '/'},
    {icon: FolderIcon, link: '/'},
];

export const Sidebar = () => {
    return (
        <section className="sidebar">
            <ul className="sidebar__nav">
                {NAV_CONFIG.map(item => {
                    return (
                        <NavItem {...{
                            key: Math.random(),
                            icon: item.icon,
                            link: item.link
                        }} />
                    );
                })}
            </ul>
        </section>
    );
}
