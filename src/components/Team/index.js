import React from 'react';
import { Typography, Grid } from '@material-ui/core';

function Team() {
    return (
        <div>
            {/* Section Title */}
            <a name="team"><Typography
                className="title"
                variant="h1"
                component="h1"
                style={{ fontWeight: "bold" }}
            >
                MEET THE DUDES
            </Typography></a>

            {/* Section Sub-Title */}
            <Typography variant="h4">
                We are the dynamic duo behind <b>codesign web apps</b>.
            </Typography>
            {/* Section Text */}
            <div style={{maxWidth: "50%", margin: "0 auto"}}>
            <Typography variant="body1" style={{fontSize:"1.25rem"}}>
            We met in a coding bootcamp through the University of Texas at Austin and quickly became friends. After finding out that we had complimentary skills in front and back end development, we decided to put them together to form the greatest web development team the world has ever known!
            </Typography>
            </div>

            {/* Andrew Picture */}
            <Grid container spacing={0} style={{marginTop: "1rem"}}>
            <Grid item xs={2}></Grid>
            <Grid item xs={4} className="center">
                <img src="./images/smiley-yellow.png" alt="Andrew" style={{width: "50%"}}></img>
                <Typography variant="h5">Andrew Brooking</Typography>
                <Typography variant="body1">co-founder</Typography>
            </Grid>
            {/* Ryan Picture */}
            <Grid item xs={4} className="center">
                <img src="./images/smiley-yellow.png" alt="Ryan" style={{width: "50%"}}></img>
                <Typography variant="h5">Ryan Harris</Typography>
                <Typography variant="body1" style={{paddingTop: "0"}}>co-founder</Typography>
            </Grid>
            <Grid item xs={2}></Grid>
            </Grid>
        </div>
    );
}

export default Team;