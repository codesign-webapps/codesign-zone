import React from 'react';
import { Typography } from '@material-ui/core';

function About() {
    return (
        <div>
            {/* Section Title */}
            <Typography variant="h2" component="h2">Who are we anyway?</Typography>

            {/* About Text */}
            <Typography variant="h4" component="h2">Codesign Web Applications</Typography>
            <Typography variant="body1" component="p">
              is an experienced and passionate group of designers, developers, project managers, writers, and artists.
              Built on customer service first and foremost, every customer becomes a part of the Codesign family. Together we face the challenges and celebrate the victories!
            </Typography>

            {/* What We Do Text */}
            <Typography variant="h4" component="h2">What We Do</Typography>
            <ul>
              <li>Web Design</li>
              <li>Web Hosting</li>
              <li>App Development</li>
              <li>Web Copy Writing</li>
              <li>Photography</li>
              <li>Videography</li>
            </ul>
        </div>
    );
}

export default About;