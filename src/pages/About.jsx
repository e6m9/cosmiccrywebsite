import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import portrait from '../assets/images/portrait.jpeg';

export default function About() {
  return (
    <div>
      <Box
        sx={{
          border: '2px solid lightblue',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          width: '100%',
          alignItems: 'center',
          maxWidth: { xs: '60%', sm: '50%', md: '40%', lg: '40%', xl: '50%' },
          margin: '16px auto 0',
        }}
      >
        <img src={ portrait } alt="portrait of Ashley Maximillian, she has long green and blue hair with an undercut on one side, purple makeup around her eyes, lined with a sharp cateye, and green lipstick showing off her smile. she is wearing a large green crystal around her neck" style={{
          height: '100%',
          width: '50%',
          marginTop: '8px',
          marginBottom: '8px',
        }}
        />
        <Paper square={false}
          variant="outlined"
          sx={{
            padding: .66,
            backgroundColor: 'rgb(34, 61, 85)',
          }}>
          <Typography variant="h3" component="p"
            sx={{
              fontSize: { xs: '.5rem', sm: '.75rem', md: '1rem', lg: '1.33rem' },
              color: 'white',
            }}
          >
            Ashley Maximillian, aka e6m9, is a self-taught artist. She is focused on a wide range of mediums from acrylic to resin, noisy instruments to wire wrapped crystals, plant proliferation and junk innovation, and even coding.
            <br /><br />
            A through line of wild chaos magic and fearlessly pushing boundaries brings it all together, representing Ashley’s drive to channel her desire for growth and transformation into something that can be experienced.
            <br /><br />
            Ashley is based in New Jersey with her cat familiar, Moon.
          </Typography>
        </Paper>
      </Box>
    </div>
  );
}
