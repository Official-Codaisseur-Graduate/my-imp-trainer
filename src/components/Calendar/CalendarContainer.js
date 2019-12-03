import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
// import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
// import Main from './Main';
import Link from '@material-ui/core/Link';
import logo from '../../images/logo.png'
// import Sidebar from './Sidebar';
// import Footer from './Footer';
// import post1 from './blog-post.1.md'
// import post2 from './blog-post.2.md';
// import post3 from './blog-post.3.md';

const useStyles = makeStyles(theme => ({
    mainGrid: {
        marginTop: theme.spacing(3),
    },
    logo: {
        width: "100%",
        marginRight: '0',
        marginBottom: "2%",
        marginTop: "1%",

        "& img": {
            width: "80%",
            marginRight: '0',
            marginBottom: "2%",
            marginTop: "1%",
        }
    },
}));

const sections = [
    { title: '', url: '' },
    // { title: 'Main', url: '#' },
    // { title: 'Dashboard', url: '#' },
    // { title: 'Workout', url: '#' },
    // // { title: 'Login', url: '#' },
];

const mainFeaturedPost = {
    title: "Workout of the Day",
    description:
        "",
    image: 'https://source.unsplash.com/featured/?{weightlifting}',
    imgText: 'main image description',
    linkText: "Continue to today's workout.",
};

const featuredPosts = [
    {
        title: 'This week',
        date: '4 workouts',
        // description:
        // '',
        image: 'https://source.unsplash.com/featured/?{workout},{fitness}',
        imageText: 'Image Text',
    },
    {
        title: 'Next month',
        date: '19 workouts',
        // description:
        // '',
        image: 'https://source.unsplash.com/featured/?{crossfit},{wod}',
        imageText: 'Image Text',
    },
    // {
    //     title: 'Month 2',
    //     date: '21 workouts',
    //     // description:
    //     // '',
    //     image: 'https://source.unsplash.com/featured/?{weightlifting}',
    //     imageText: 'Image Text',
    // },
    // {
    //     title: 'Month 3',
    //     date: '18 workouts',
    //     // description:
    //     // '',
    //     image: 'https://source.unsplash.com/featured/?{calisthenics}',
    //     imageText: 'Image Text',
    // },
];

// const posts = [post1, post2, post3];

// const sidebar = {
//     title: 'About',
//     description:
//         'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
//     archives: [
//         { title: 'March 2020', url: '#' },
//         { title: 'February 2020', url: '#' },
//         { title: 'January 2020', url: '#' },
//         { title: 'November 1999', url: '#' },
//         { title: 'October 1999', url: '#' },
//         { title: 'September 1999', url: '#' },
//         { title: 'August 1999', url: '#' },
//         { title: 'July 1999', url: '#' },
//         { title: 'June 1999', url: '#' },
//         { title: 'May 1999', url: '#' },
//         { title: 'April 1999', url: '#' },
//     ],
//     social: [
//         { name: 'GitHub', icon: GitHubIcon },
//         { name: 'Twitter', icon: TwitterIcon },
//         { name: 'Facebook', icon: FacebookIcon },
//     ],
// };

export default function CalendarContainer() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg">
                {/* <Header title="Calendar" sections={sections} /> */}
                {/* <Header sections={sections} /> */}
                <div className={classes.logo}>
                    <Link href="/">
                        <img src={logo} alt="" />
                    </Link>
                </div>
                <main>
                    <MainFeaturedPost post={mainFeaturedPost} />
                    <Grid container spacing={2}>
                        {featuredPosts.map(post => (
                            <FeaturedPost key={post.title} post={post} />
                        ))}
                    </Grid>
                    <Button className={classes.mainGrid} variant="contained" color="primary" href="dashboard">BACK TO DASHBOARD</Button>
                    <Grid container spacing={5} className={classes.mainGrid}>
                        {/* <Main title="From the firehose" posts={posts} /> */}
                        {/* <Sidebar
                            title={sidebar.title}
                            description={sidebar.description}
                            archives={sidebar.archives}
                            social={sidebar.social}
                        /> */}
                    </Grid>
                </main>
            </Container>
            {/* <Footer title="Footer" description="Something here to give the footer a purpose!" /> */}
        </React.Fragment>
    );
}