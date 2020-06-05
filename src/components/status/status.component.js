import React from 'react';
import './status.component.scss';

export const StatusComponent = ({status}) => {
    status = status.charAt(0).toUpperCase() + status.substr(1);

    return (
        <div className="status">
            <span className={`status__value ${status.toLowerCase()}`}>
                {status}
            </span>
        </div>
    );
};
