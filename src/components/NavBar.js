import React from 'react'
import './styles-comps.css'

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import DescriptionIcon from '@material-ui/icons/Description';
import AppsIcon from '@material-ui/icons/Apps';
import EmailIcon from '@material-ui/icons/Email';
import LoyaltyIcon from '@material-ui/icons/Loyalty';

const useStyles = makeStyles((theme) => ({
root: {
    flexGrow: 1,
},
menuButton: {
    marginRight: theme.spacing(2),
},
title: {
    flexGrow: 1,
},
}));


export default function NavBar() {

    const classes = useStyles();

    return(

        <div className={classes.root}>
        <AppBar position="static" id="nav">
    <Toolbar id="bar">
    <Typography variant="h6" className={classes.title}>
    <LoyaltyIcon/>
    Welcome!
    </Typography>
    <Button color="inherit" href="#myprojects">
    <AppsIcon/>
    Projects
    </Button>
    <Button color="inherit" target="blank" href="https://www.canva.com/design/DAEaQsXAn1o/h7npqlPTwAJDcCou-emVKQ/view?utm_content=DAEaQsXAn1o&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton"> 
    <DescriptionIcon/>
    My CV
    </Button>
    <Button color="inherit" href="#contactme">
    <EmailIcon/>
    Contact
    </Button>
    </Toolbar>
</AppBar>
</div>
    )
}