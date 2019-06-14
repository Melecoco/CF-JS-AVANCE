import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    card: {
        width: 300,
        margin: 5,
        
    },
    media: {
        height: 200,
    },
});

export default function CardMovie(props) {
    const classes = useStyles();
    const { id, title, releaseYear, synopsis, poster } = props

    return (
        <Card id = {id} className={classes.card} onClick={props.onClick}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={poster}
                    title={title}
                />
                <CardContent>                    
                    <Typography gutterBottom variant="h5" component="h2">
                    affichage de l'id = {id}
                    <br></br>
                        {title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {releaseYear}
                        <br></br>
                        {synopsis}
                    </Typography>
                </CardContent>
            </CardActionArea>
            {/* <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions> */}
        </Card>
    );
}
