import React from 'react';
import {Button, Toolbar, AppBar} from '@material-ui/core'; //importing material ui component


// Functional Component
const Header = () => {
    return (
        <AppBar position='static'>
            <Button>Hello</Button>
            <div>Hello, World (Just for Moink)</div>
            <Toolbar>React Material UI Example</Toolbar>
        </AppBar>
    );
};

export default Header;
