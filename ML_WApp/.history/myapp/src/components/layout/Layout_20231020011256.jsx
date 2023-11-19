import React, { Fragment } from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({children}) => {
    return (
        <Fragment>
            <Topbar></Topbar>
            {children}
        </Fragment>
    );
};

export default Layout;