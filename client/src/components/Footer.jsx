import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Footer() {
  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 'flex 6vh', 
        backgroundColor: 'teal',
      }}
    >
      {/* icon box */}
       <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <IconButton aria-label="GitHub" href='https://github.com/e6m9' sx={{ '& svg': { fontSize: { xs: 20, sm: 24, md: 28, lg: 32 },
      '&:hover': {
        transform: 'scale(1.2)', // Makes the icon larger when hovered
        transition: 'transform 0.3s ease-in-out', // Smooth transition
      }, } }}>
          <GitHubIcon sx={{ color: 'yellow' }} />
        </IconButton>
        <IconButton aria-label="LinkedIn" href='https://linkedin.com/in/ashley-maximillian-95a862301/' sx={{ '& svg': { fontSize: { xs: 20, sm: 24, md: 28, lg: 32 } },
      '&:hover': {
        transform: 'scale(1.2)', // Makes the icon larger when hovered
        transition: 'transform 0.3s ease-in-out', // Smooth transition
      } }}>
          <LinkedInIcon sx={{ color: 'yellow'}} />
        </IconButton>
        <IconButton aria-label="Instagram" href='https://instagram.com/cosmiccry' sx={{ '& svg': { fontSize: { xs: 20, sm: 24, md: 28, lg: 32 },
      '&:hover': {
        transform: 'scale(1.2)', // Makes the icon larger when hovered
        transition: 'transform 0.3s ease-in-out', // Smooth transition
      } } }}>
          <InstagramIcon sx={{ color: 'yellow' }} />
        </IconButton>
      </Box>
      {/* text container */}
      <Typography variant="body1" 
        sx={{
          textAlign: 'center',
          fontSize: { xs: '.5rem', sm: '.75rem', md: '1rem', lg: '2rem' }, 
          color: 'white',
          '& span': {
            fontWeight: 'bold',
          },
          '& .blue': {
            color: 'lightblue',
          },
          '& .pink': {
            color: 'pink',
          },
        }}
      >
        <span className="blue">trans</span> <span className="pink">rights</span> <span>are</span> <span className="pink">human</span> <span className="blue">rights</span>
      </Typography>
      {/* box for spacing */}
      <Box
      sx={{ flexShrink: 0, width: 48*3 }}>
      </Box>
    </Box>
  );
}
