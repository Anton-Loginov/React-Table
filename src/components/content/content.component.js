import React from 'react';
import {TableController} from "../table";
import {Sidebar} from "../sidebar";

import './content.scss';

export const Content = () => {
    return (
        <section className="content">
            <Sidebar />
            <TableController />
        </section>
    );
}
