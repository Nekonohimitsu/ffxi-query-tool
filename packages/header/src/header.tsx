import React from 'react';
import {Button, Toolbar, AppBar} from '@material-ui/core'; //importing material ui component


// Functional Component
const Header = () => {
    return (
        <AppBar position='static'>
            <Toolbar>FFXI Query Tool</Toolbar>
        </AppBar>
    );
};

export default Header;
