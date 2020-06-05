import React from 'react';
import Avatar from '../../images/avatar.png';
import './user-info.scss';

const USER_NAME = 'Barack Obama';

export const UserInfo = () => {
    return (
        <div className="user-info">
            <div className="user-info__avatar">
                <img src={Avatar} alt="avatar"/>
            </div>
            <a href="/" className="user-info__user-name">
                {USER_NAME}
            </a>
        </div>
    );
}
