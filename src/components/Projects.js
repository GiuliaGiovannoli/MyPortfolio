import React from 'react'
import './styles-comps.css'

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import GitHubIcon from '@material-ui/icons/GitHub';

export default function Projects() {

    return (

    <div style={{ width: '100%' }}>
    <div id="myprojects">
    <div className="able">
    <h3>What I am able to do </h3>
    </div>
    <div>
    <Box display="flex" flexWrap="nowrap" p={1} m={1} bgcolor="transparent" id="box">
        <Box p={1} id="little">
        <h4>Shopping App</h4>
        <p>Tools: <br></br>
        Javascript, React, Node, Express, MongoDB, <br></br>
        Redux, Material UI, Bootstrap</p>
        <Button id="btn" variant="contained" target="blank" href="http://beautylife.ramyobeid.de/">
        BeutyLife
        </Button>
        </Box>
        <Box p={1} id="little">
        <h4>Pokemon Fights </h4>
        <p>Tools: <br></br>
        Javascript, React, Node, Express, MongoDB, Bootstrap</p>
        <Button id="btn" variant="contained" target="blank" href="https://gallant-lovelace-696be0.netlify.app/">
            PokeFight
        </Button>
        </Box>
        <Box p={1} id="little">
        <h4>Cooking Blog</h4>
        <p>Tools: <br></br> 
        Javascript, React, Node, Express, SQL, Material UI</p>
        <Button id="btn" variant="contained" target="blank" href="https://giuliagiovannoli.github.io/wbs-cookblog_node/">
            Cook like an Artist
        </Button>
        </Box>
    </Box>
    </div>
    
    <div>
    <Box display="flex" flexWrap="nowrap" p={1} m={1} bgcolor="transparent" id="box">
        <Box p={1} id="little">
        <h4>Articles User Interface </h4>
        <p>Tools: <br></br>
        Javascript, React, API, Material UI</p>
        <Button id="btn" variant="contained" target="blank" href="https://kajalben.github.io/hacker-news-api/">
            hackernews
        </Button>
        </Box>
        <Box p={1} id="little">
        <h4>To Do List</h4>
        <p>Tools: <br></br>
        Javascript, HTML, CSS</p>
        <Button id="btn" variant="contained" target="blank" href="https://giuliagiovannoli.github.io/toDoList/">
            makeIt
        </Button>
        </Box>
        <Box p={1} id="little">
        <h4>Users Posts' Links</h4>
        <p>Tools: <br></br>
        Javascript, React, Node, Express, MongoDB, Material UI</p>
        <Button id="btn" variant="contained" target="blank" href="https://giuliagiovannoli.github.io/hackernews_challenge/">
        Hackernews
        </Button>
        </Box>
        </Box>
    </div>
    <div className="git">
    <h4>Check for more</h4> 
    <Button variant="contained" target="blank" id="btn" href="https://github.com/GiuliaGiovannoli">
    <GitHubIcon/> 
    <br></br>
    My GitHub
    </Button>
    </div>
    </div>
    </div>

);
}
