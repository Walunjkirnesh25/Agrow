import { Box, makeStyles, Grid } from '@material-ui/core';
import clsx from 'clsx';

const ImageURL = [
    'https://i.postimg.cc/SKYsC8FQ/banner-1.jpg',
    'https://i.postimg.cc/m2d2nVT2/Banner-2vj.jpg',
    'https://i.postimg.cc/dVpQs17b/Banner-3vj.jpg'
];

const useStyle = makeStyles(theme => ({
    wrapper: {
        display: 'flex',
        marginTop: 20,
        justifyContent: 'space-between'
    },
    image: {
        width: '100%'
    },
    help: {
        [theme.breakpoints.down('md')]: {
            objectFit: 'cover',
            height: 120
        }
    }
}));

const MidSection = () => {
    const classes = useStyle();
    const url = 'https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50';
    return (
        <>
            <Grid lg={12} sm={12} md={12} xs={12} container className={classes.wrapper}>
                {
                    ImageURL.map(image => (
                        <Grid item lg={4} md={4} sm={12} xs={12}>
                            <img src={image} className={classes.image} />
                        </Grid>
                    ))
                }
            </Grid>
            <img src={url} className={clsx(classes.wrapper, classes.help)} style={{width: '100%'}} />
        </>
    )
}

export default MidSection;