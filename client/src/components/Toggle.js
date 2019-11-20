import React, { Component } from 'react';
// import Itineraries from './Itineraries.js';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
// import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
// import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import MoreVertIcon from '@material-ui/icons/MoreVert';
import ratingIcon from '../img/ratingicon.png';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 500,
  },
  media: {
    height: 0,
    paddingTop: '10.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));


export default function Toggle (props) {
  
        const classes = useStyles();
        const [expanded, setExpanded] = React.useState(false);
        const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    return (
        
        <Card className={classes.card}>
        <CardHeader className="cardHeader"
        avatar={
          <img className="profilePicture" src ={props.itinerary.profilepicture} alt="User Picture" className="userPicture"/>               
        }
        title={props.itinerary.title}
        subheader={props.itinerary.cityName}
        />
      
      <CardContent className="cardContent">
        <Typography variant="body2" color="textSecondary" component="p">
          <img src={ ratingIcon } alt="ratingIcon" className="ratingIcon" height="20px"/> {props.itinerary.rating} / {props.itinerary.duration} hours / {props.itinerary.price}
        </Typography>
      </CardContent>
      <CardActions disableSpacing className="cardActions">
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <p>Aquí van los sliders de las activities</p>
          
        </CardContent>
      </Collapse>
    </Card>
    
    )
}
