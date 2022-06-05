import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

export const Header = (): React.ReactElement => {
    return (
        <AppBar position='static'>
            <Toolbar>
                <Typography variant='h6'>This Is ToolBar Example</Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
