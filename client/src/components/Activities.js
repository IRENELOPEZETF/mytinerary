import React, { Component } from "react";
import "../App.css";
import "../index.css"
import { connect } from "react-redux";
import { getActivities } from "../store/actions/activityAction.js"; 
// import Carousel from "./Carousel.js";


export class Activities extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activities: [],
        };
    }

    componentDidMount() {
        this.props.getActivities(this.props.match.params.itineraryId)
    }

    render() {
        console.log("itinId", this.props.match.params.itineraryId);
        const { activities } = this.props;

        if (activities.isloaded) {
            return (
                <div><h1 className="isLoaded">LOADING...</h1></div>
            )
        } else {
            return (
                <div className="activitySlide">
                    {activities.map(activity => (
                        <React.Fragment key={activity._id}>
                            <div className = "activityCard">{activity.name}</div>
                            <img className = "activityPicture" src = {activity.picture} alt = "activityPicture" height = "80px" width = "80px"/>
                        </React.Fragment>
                    ))}    
                </div>
            )
        }
    }
}

const mapStateToProps = (state) => {
    return {
        activities: state.activities.activities,
        isloaded: state.activities.isloaded,
    }
};
export default connect(mapStateToProps, {getActivities}) (
    Activities
)