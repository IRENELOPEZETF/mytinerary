import React, { Component } from "react";
import "../App.css";
import "../index.css"
import { connect } from "react-redux";
import { getItineraries } from "../store/actions/itineraryAction.js"; 
import { NavLink } from "react-router-dom";

export class Itineraries extends Component {
    constructor(props) {
        super(props);
        this.state = {
            itineraries: [],
        };
    }
    
    componentDidMount() {
        this.props.getItineraries(this.props.match.params.cityId)
    }
  
    render() {
        console.log(this.props.match.params.cityId);
        // console.log(this.props.cities);
        // console.log(this.props.isloaded);
        const { itineraries } = this.props;

        if (itineraries.isloaded) {
            return (
                <div><h1 className="isLoaded">LOADING...</h1></div>
            )} else {
        
            return (           
                <div className="ulCity">
                    {itineraries.map(itinerary => (
                        
                        <React.Fragment key={itinerary._id}>
                        <div><h1 className="h1cityList">{itinerary.cityName}</h1>
                        </div>
                        <div className = "itinerarySlide">
                            <NavLink className = "cityLink" to = { "/activities/"+itinerary._id }>                                   
                                <img className = "profilePicture" src = {itinerary.profilepicture} alt = "profilepicture" height = "30px"/> 
                                <div className = "itineraryTittle">{itinerary.title}</div>
                                <div className = "itineraryInfo">
                                    <div className = "itineraryRating">{itinerary.rating}</div>
                                    <div className = "itineraryDuration">{itinerary.duration}</div>
                                    <div className = "itineraryPrice">{itinerary.price}</div>
                                </div>   
                            </NavLink>
                        </div>
                        </React.Fragment>
                    ))}  
                </div>
                
            );}
        // console.log(this.props.isloaded);
    }
}

const mapStateToProps = (state) => {
    // console.log(state);
    return {
        itineraries: state.itineraries.itineraries,
        isloaded: state.itineraries.isloaded,
    }
};
export default connect(mapStateToProps, {getItineraries}) (
    Itineraries
)
