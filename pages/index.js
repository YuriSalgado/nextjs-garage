import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ProTip from '../src/ProTip';
import Link from '../src/Link';
import Copyright from '../src/Copyright';

export default function Index() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Next.js v5 example
        </Typography>
        <Grid container spacing={{ xs: 2, md: 3 }}>
          <Grid item>
            <Link href="/about">
              Go to the about page
            </Link>
          </Grid>
          <Grid item>
            <Link href="/cars">
              Go to the cars page
            </Link>
          </Grid>
        </Grid>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}
