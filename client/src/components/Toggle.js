import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ratingIcon from '../img/ratingicon.png';
import { NavLink } from "react-router-dom";


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
        
        const handleExpandClick = (id) => {
          if (props.selectedItinerary === id) {
            props.selectId("");
          } else {
            props.selectId(id);
          }
         
        };
    
    return (
        
        <Card className={classes.card}>
        <CardHeader className="cardHeader"
        avatar={
          <img className="userPicture" src ={props.itinerary.profilepicture} alt="User"/>          
        }
        title={props.itinerary.title}
        subheader={props.itinerary.cityName}
        />
      
      <CardContent className="cardContent">
        <Typography variant="body2" color="textSecondary" component="p">
          <img src={ ratingIcon } alt="ratingIcon" className="ratingIcon" height="20px"/> {props.itinerary.rating} / {props.itinerary.duration} hours /{props.itinerary.price}
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
            [classes.expandOpen]: props.itinerary._id === props.selectedItinerary,
          })}
          onClick = {
            () => handleExpandClick(props.itinerary._id)
          }
          aria-expanded={props.itinerary._id === props.selectedItinerary}
          aria-label="show more">
          <ExpandMoreIcon/>
        </IconButton>
      </CardActions>
      <Collapse in={props.itinerary._id === props.selectedItinerary} timeout="auto" unmountOnExit>
        
        <CardContent>
          <div className="activitiesList">
            <div className="slider">
              <ul className="ulSlider">
                <li className="liSlider">
                  {props.activities.map(activity => {
                    if ( props.itinerary._id === activity.itineraryId) {
                      return (<React.Fragment key={activity._id}>
                          <NavLink className = "activityName" to = { "/activities/" + activity._id }>
                            <h6>{activity.name}</h6>
                              <img className="ActivityPicture" src ={activity.picture} alt={activity.name} height="120px"/>
                          </NavLink>  
                      </React.Fragment>)
                      }
                  })}   
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Collapse>
    </Card>
    
    
    )
    
}
