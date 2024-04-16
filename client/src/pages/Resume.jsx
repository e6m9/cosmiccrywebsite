import React from 'react';
import { Typography, Link, Box } from '@mui/material';

export default function Resume() {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            paddingRight: { xs: 1, sm: 2, lg: 3,},
            paddingTop: { xs: .25, sm: .5, md: .75, lg: 1, xl: 2 },
        }}>
            <Box sx={{
                width: '100%',
                maxWidth: { xs: '100%', sm: '75%', md: '60%', lg: '500px' },
                textAlign: 'right',
                '& ul': {
                    padding: 0,
                    listStyle: 'none',
                    textAlign: 'right',
                },
                '& li': {
                    fontSize: { xs: '.5rem', sm: '.75rem', md: '1rem', lg: '1.33rem' },
                }
            }}
            >
                <Link sx={{
                    fontSize: { xs: '.5rem', sm: '.75rem', md: '1rem', lg: '1.33rem' },
                }} href="https://docs.google.com/document/d/16GL53oEbKMkWWE2u_M5qfKSL63B4tHag9YJ4GdVGpa0/export?format=pdf" download="Resume.pdf">
                    download my resume
                </Link>
                <Typography variant="body1" sx={{
                    mt: 2,
                    fontSize: { xs: '.5rem', sm: '.75rem', md: '1rem', lg: '1.33rem' },
                }}
                >
                    proficiencies:
                    <ul>
                        <li>HTML & CSS</li>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>Node.js</li>
                        <li>Express.js</li>
                        <li>SQL</li>
                        <li>MongoDB</li>
                    </ul>
                </Typography>
            </Box>
        </Box>
    );
}