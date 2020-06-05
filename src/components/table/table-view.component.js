import React from 'react';
import './table.scss';

export const TableView = ({tableHeaders, tableRows, renderCell}) => {
    return (
        <section className="table">
            <div className="table__header">
                <div>
                    <h3 className="table__subtitle">
                        Data Table
                    </h3>
                    <h3 className="table__title">
                        Table
                    </h3>
                </div>
                <div className="table__sort-by">
                    Sort by: From low to high
                </div>
            </div>
            <table>
                <tbody>
                    <tr>
                        {tableHeaders.map((name, index) => <th key={index}>{name}</th>)}
                    </tr>
                    {tableRows.map((row, index) => {
                        return (
                            <tr key={index}>
                                {row.map((cell, index) => <td  key={index}>
                                    {renderCell(cell,tableHeaders[index])}
                                </td>)}
                            </tr>
                        )})
                    }
                </tbody>
            </table>
        </section>
    );
};

