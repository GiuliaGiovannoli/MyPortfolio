import React from 'react';

import './styles-comps.css'
import Me from '../IMG/alsome.png'

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: 500,
    },
    image: {
        width: 128,
        height: 128,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
}));


export default function AboutMe() {

    const classes = useStyles();

    return (

        <div className={classes.root}>
            <Paper className={classes.paper} id="aboutme">
                <Grid container spacing={2}>
                    <Grid item>
                        <ButtonBase className={classes.image}>
                            <img className={classes.img} alt="complex" src={Me} style={{ cursor: 'default' }} />
                        </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                                <Typography gutterBottom variant="subtitle1" id="text">
                                    Hello!
                </Typography>
                                <Typography variant="body2" gutterBottom id="text">
                                    I am Giulia, junior full stack web Developer
                </Typography>
                                <Typography variant="body2" color="textSecondary" id="text">
                                    <br></br>
                What I use:
                <br></br>
                                    <ul>
                                        <li>HTML and CSS</li>
                                        <li>Javascript and ReactJS</li>
                                        <li>NodeJS and ExpressJS</li>
                                        <li>SQL and MongoDB</li>
                                        <li>Bootstrap and Material UI</li>
                                        <li><em>learning Redux</em></li>
                                    </ul>
                                </Typography>
                            </Grid>
                            <Grid item id="end">
                                <Typography variant="body2">
                                    <Button variant="contained" target="blank" id="btn" href="https://www.linkedin.com/in/giulia-giovannoli/">
                                        Say Hi
                </Button>
                                </Typography>
                                <Typography variant="subtitle1">
                                    <Button variant="contained" target="blank" id="btn" href="https://github.com/GiuliaGiovannoli/MyCertifications">
                                        Certifications
                </Button>
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </div>

    );
}
