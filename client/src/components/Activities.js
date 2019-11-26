import React, { Component } from "react";
import "../App.css";
import "../index.css"
import { connect } from "react-redux";
import { getActivities } from "../store/actions/activityAction.js"; 

export class Activities extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activities: [],
        };
    }
    
    componentDidMount() {
        this.props.getActivities(this.props.match.params.cityId)
        console.log(this.props.match.params.cityId)
    }

    render() {
        
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
                            <div className="activityCard" activity = {activity._id}>
                            
                                <h2>{activity.name}</h2>
                                <background><img className = "activityPicture" src = {activity.picture} alt = "activityPicture"/></background>
                                <h4>{activity.place}</h4>
                                <p>{activity.duration}</p>
                                <p>{activity.price}</p>
                                <p>{activity.description}</p>
                                


                            </div>
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