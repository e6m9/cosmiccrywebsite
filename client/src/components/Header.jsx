import React from 'react';
import Navigation from './Navigation';
import { Card, CardContent, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <Card
      sx={{
        width: '100%',
        height: 'flex',
        backgroundColor: 'teal',
        color: 'white',
        display: 'flex',
        justifyContent: 'flex-start',
        boxShadow: 3,
      }}
    >
      <CardContent
        sx={{
          flexGrow: 1, px: 2,
          alignItems: 'center',
          justifyContent: 'flex-start',
          '&:last-child': {
            paddingBottom: 0,
          },
        }}
      >
        <Typography variant="h4" component={Link}
          to='/'
          sx={{
            fontWeight: 'bold',
            fontSize: { xs: '2rem', sm: '4rem', md: '6rem', lg: '8rem' },
            color: 'white',
            textDecoration: 'none',
            '&:hover': {
              color: 'white',
              textDecoration: 'none',
            },
            textAlign: 'left',
          }}
        >
          COSMIC CRY PRODUCTIONS
        </Typography>
        <Navigation />
      </CardContent>
    </Card>
  )
}