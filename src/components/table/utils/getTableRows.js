import {getTableHeaders} from "./getTableHeaders";
import {prepareTableRows} from "./prepareTableRows";
import {getTotalTime} from "./getTotalTime";
import {prepareTime} from "./prepareTime";

export const getTableRows = (data) => {
    return data.map(row => {
        const headers = getTableHeaders(data);
        const rows = headers.map(name => prepareTableRows(row.data, name));
        const time = rows.map(row => prepareTime(row));

        return [row.name, ...time, row.status, getTotalTime(rows)];
    });
};
