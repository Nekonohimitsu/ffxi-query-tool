import React from 'react';
import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    root: {
      borderRadius: 12,
      backgroundColor: "blue"
    }
  };

// Functional Component
const Header = () => {
    return (
        <Typography>Hello</Typography>
        // <AppBar position='static'>
        //     <Toolbar>React Material UI Example</Toolbar>
        // </AppBar>
    );
};

export default withStyles(styles)(Header);
