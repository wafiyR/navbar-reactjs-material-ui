

import React from 'react';


import { AppBar, Toolbar, Typography, makeStyles } from '@material-ui/core';
import { Autorenew, CenterFocusStrong } from '@material-ui/icons';

const useStyles = makeStyles(() => ({  // need to import makeStyles from material-ui/core to resolve issue/error of makeStyles is undefined

    footerstyle: {
        borderTop: "1px solid #ddd",
        height: "60px",
        lineHeight: "60px",
        backgroundColor: "white",
    },
    txtfooter: {       
        color: "#000000",
        textAlign: "center",
    },

}));


// rsf + TAB to auto-create function
export default function Footer() {

    const classes = useStyles();

    return (
        <footer className={classes.footerstyle}>
            <Typography className={classes.txtfooter}>&copy;{new Date().getFullYear()} Rhazes Telepharmacy - All Rights Reserved</Typography>
            {/* in React, Javascript codes can be put anywhere within {}, just like Date().getFullYear() above */}
        </footer>
    );
}



