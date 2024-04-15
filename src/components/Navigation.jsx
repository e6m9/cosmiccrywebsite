import * as React from 'react';
import { NavLink } from 'react-router-dom';
import Box from '@mui/material/Box';

export default function Navigation() {

  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'right',
        typography: 'body1',
        '& > :not(style) ~ :not(style)': {
          ml: 2,
        },
        '& a': {
        fontWeight: 'bold',
        fontSize: { xs: '1rem', sm: '1.5rem', md: '2rem', lg: '2.5rem' },
        color: 'inherit',
        textDecoration: 'none'
        },
        '& :hover': {
          color: 'gold'
        },
        '& .active': {
          color: 'yellow',
          textShadow: '0 0 4px rgba(255, 215, 0, 0.7)',
        },
      }}
    >
      <NavLink to="/" exact activeClassName="active">
        About me
      </NavLink>
      <NavLink to="/portfolio" activeClassName="active">
        Portfolio
      </NavLink>
      <NavLink to="/contact" activeClassName="active">
        Contact
      </NavLink>
      <NavLink to="/resume" activeClassName="active">
        Resume 
      </NavLink>
    </Box>
  );
}