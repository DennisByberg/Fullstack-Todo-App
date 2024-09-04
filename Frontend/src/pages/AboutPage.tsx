import { Typography } from '@mui/material';
import React from 'react';
import PageHeading from '../components/PageHeading';

function AboutPage() {
  return (
    <React.Fragment>
      <PageHeading>About</PageHeading>
      <Typography paragraph={true}>
        This is an app i building on to learn .NET C# Asp.net combined with a frontend
        framework - this time React.
      </Typography>
    </React.Fragment>
  );
}

export default AboutPage;
