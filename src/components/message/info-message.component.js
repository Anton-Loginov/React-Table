import React from 'react';
import InfoIcon from '../../images/mark.png'
import './info-message.component.scss';

export const SHOW_INFO_MESSAGE_KEY = 'show-info-message-key';

export const InfoMessage = ({showMessage, title, subtitle, handleOnClick}) => {
    if (showMessage) {
        return (
            <div className="info-message">
                <div className="info-message__content">
                    <div className="info-message__icon">
                        <img src={InfoIcon} alt="info message"/>
                    </div>
                    <div className="info-message__text">
                        {title ? <h3 className="info-message__title">{title}</h3> : null}
                        {subtitle ? <h3 className="info-message__subtitle">{subtitle}</h3> : null}
                    </div>
                </div>
                <button className="info-message__btn" name="submit" onClick={handleOnClick}>
                    Ok
                </button>
            </div>
        );
    }
    return null;
};
