import React from 'react';
import { Grid, Card, CardActionArea, CardContent, CardMedia, Typography, Link } from '@mui/material';
import ried from '../assets/images/riednrite.png';

const projects = [
    {
        title: "Art",
        imageUrl: art,
    },
    {
        title: "Music",
        imageUrl: music,
    },
    {
        title: "Objects",
        imageUrl: objects,
    },
    {
        title: "Electronics",
        imageUrl: electronics,
    },
    {
        title: "Apps",
        imageUrl: ried,
    },
    {
        title: "Events",
        imageUrl: events,
    },
];

export default function Portfolio() {
    return (
        <Grid container spacing={4}>
            {projects.map((project, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                    <Card sx={{
                        backgroundColor: 'transparent',
                        p: 3,
                    }}>
                        <CardActionArea
                            component="a"
                            href={project.deployedUrl || project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <CardMedia
                                component="img"
                                image={project.imageUrl}
                                alt={project.title}
                                sx={{
                                    height: '100%',
                                    objectFit: 'contain',
                                }}
                            />
                            <CardContent>
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                    component="div"
                                    sx={{
                                        color: 'yellow',
                                        '&:hover': { color: 'gold' },
                                        mb: 0
                                    }}
                                >
                                    {project.title}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardContent sx={{
                            pt: 0
                        }}
                        >
                            <Typography variant="body2" color="text.secondary" sx={{
                                '& a': {
                                    color: 'yellow',
                                    '&:hover': {
                                        color: 'gold'
                                    }
                                }
                            }}
                            >
                                {project.deployedUrl ? (
                                    <>
                                        <Link href={project.deployedUrl} target="_blank" rel="noopener noreferrer">Deployed Application</Link>
                                        {' | '}
                                    </>
                                ) : null}
                                <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">GitHub Repo</Link>
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
}