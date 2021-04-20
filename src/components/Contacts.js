import React from 'react'

import './styles-comps.css'
import { makeStyles } from '@material-ui/core/styles';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Button from '@material-ui/core/Button';
import DraftsIcon from '@material-ui/icons/Drafts';
import LoyaltyIcon from '@material-ui/icons/Loyalty';

const useStyles = makeStyles((theme) => ({
root: {
    '& > *': {
    margin: theme.spacing(1),
    },
},
}));


export default function Contact() {

    const classes = useStyles();
    
    const year = new Date().getFullYear()

    return(
            <footer id="contactme">
                <div className="footer">
                <Button id="btn" variant="contained" target="blank" href="https://www.linkedin.com/in/giulia-giovannoli">
                <LinkedInIcon/>
                My LinkedIn
                </Button>
                <Button id="btn" variant="contained" href="mailto:giovannoli.giulia@gmail.com">
                <DraftsIcon/>
                Contact me
                </Button>
                <Button id="btn" variant="contained" target="blank" href="https://www.instagram.com/giuliagiovannoli">
                <InstagramIcon/>
                My Pets
                </Button>
                </div>
                <div className="last">
                <p>Giulia Giovannoli Copyright &copy; {year}</p>
                <p>
                <LoyaltyIcon/>
                Thank you 
                </p>
                </div>
            </footer>
    )
}