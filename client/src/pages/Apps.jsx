import React from 'react';
import { Grid, Card, CardActionArea, CardContent, CardMedia, Typography, Link } from '@mui/material';
import ried from '../assets/images/riednrite.png';
import note from '../assets/images/notesmith.png';
import illustrated from '../assets/images/illustratedpages.png';
import readme from '../assets/images/readmegenny.png';
import sock from '../assets/images/socknetapi.png';
import track from '../assets/images/trackemploy.png';

const projects = [
    {
        title: "Ried&Rite",
        imageUrl: ried,
        deployedUrl: "https://morning-eyrie-69746-22e0c570d180.herokuapp.com/",
        githubUrl: "https://github.com/e6m9/RiedandRite"
    },
    {
        title: "Note-Smith",
        imageUrl: note,
        deployedUrl: "https://warm-depths-06907-3d967eb40a9a.herokuapp.com/",
        githubUrl: "https://github.com/e6m9/note-smith"
    },
    {
        title: "Illustrated Pages",
        imageUrl: illustrated,
        deployedUrl: "https://e6m9.github.io/illustrated-pages/",
        githubUrl: "https://github.com/e6m9/illustrated-pages"
    },
    {
        title: "ReadMe Genny",
        imageUrl: readme,
        deployedUrl: "",
        githubUrl: "https://github.com/e6m9/README_GENNY"
    },
    {
        title: "Socknet API",
        imageUrl: sock,
        deployedUrl: "",
        githubUrl: "https://github.com/e6m9/socknet_api"
    },
    {
        title: "Track-Employ",
        imageUrl: track,
        deployedUrl: "",
        githubUrl: "https://github.com/e6m9/Track-Employ"
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