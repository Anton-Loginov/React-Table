import React, {useState, useEffect, useCallback} from 'react';

import {InfoMessage} from "../message";
import {TableView} from "./table-view.component";
import {StatusComponent} from "../status";

import {getTableHeaders} from './utils/getTableHeaders';
import {getTableRows} from './utils/getTableRows';
import {sortedTableRows} from './utils/sortedRows';
import {prepareTime} from "./utils/prepareTime";

import {SHOW_INFO_MESSAGE_KEY} from "../message/info-message.component";
import {DATA, MESSAGE, TIMEOUT_DELAY, TABLE_KEY} from './constants'

export const TableController = () => {
    const tableHeaders = [TABLE_KEY.name, ...getTableHeaders(DATA), TABLE_KEY.status, TABLE_KEY.total];
    const tableRows = sortedTableRows(getTableRows(DATA));

    const [showMessage, toggleShowMessage] = useState(false);

    useEffect(() => {
        if (sessionStorage.getItem(SHOW_INFO_MESSAGE_KEY) === 'false') return;

        const timer = setTimeout(() => {
            return toggleShowMessage(true);
        }, TIMEOUT_DELAY)

        return () => clearTimeout(timer);
    }, [])

    const handleOnClick = () => {
        sessionStorage.setItem(SHOW_INFO_MESSAGE_KEY, false);
        toggleShowMessage(false);
    };

    const renderCell = useCallback((value, key) => {
        if (key === TABLE_KEY.status){
            return <StatusComponent {...{status: value}} />;
        } else if (key === TABLE_KEY.total) {
            return prepareTime(value);
        }

        return value;
    }, []);

    return (
        <div className="wrapper">
            <TableView {...{tableHeaders, tableRows, renderCell,}} />
            <InfoMessage {...{showMessage, title: MESSAGE, subtitle: MESSAGE, handleOnClick,}} />
        </div>
    );
};