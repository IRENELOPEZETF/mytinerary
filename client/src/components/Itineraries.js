import React, { Component } from "react";
import "../App.css";
import "../index.css"
import { connect } from "react-redux";
import { getItineraries } from "../store/actions/itineraryAction.js"; 
import  Toggle  from "./Toggle.js";
// import { getActivities } from "../store/actions/activityAction.js";


export class Itineraries extends Component {
    constructor(props) {
        super(props);
        this.state = {
            itineraries: [],
            city: {},
            selectedItinerary: "",
            activities: [],
        };
    }
    
    componentDidMount() {
        this.props.getItineraries(this.props.match.params.cityId);
        // this.props.getActivities(this.props.match.params.cityId);
        
        fetch('/cities/find/' + this.props.match.params.cityId)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    city: data
                })
            });
        
        fetch('/activities/find/' + this.props.match.params.cityId)
           .then(res => res.json())
           .then(data => {
                this.setState({
                    activities: data
                })
            });
    }

    selectId=(itineraryId) =>{
                     
         this.setState({
             selectedItinerary: itineraryId
         })
            
    }
  
    render() {
        
        const { itineraries } = this.props;

        // if (itineraries.isloaded) {
        //     return (
        //         <div><h1 className="isLoaded">LOADING...</h1></div>
         if (itineraries.length === 0) {
            return (
                <div className="ulCity">
                     <div><img className ="cityPicture" src={this.state.city.picture} alt = {this.state.city.name} height = "240px"/>
                     </div>
                     <div><p className="reSorry">We're sorry, there are not itineraries for this city yet</p></div>
                </div>
            )} else {
        
            return (           
                
                <div className="ulCity">
                     <div><img className ="cityPicture" src={this.state.city.picture} alt = {this.state.city.name} height = "300px"/>
                        </div>
                    {/* <div><h1>{cityId.name}</h1></div> */}
                    {itineraries.map(itinerary => (
                    
                        <React.Fragment key={itinerary._id}>
                        <Toggle itinerary = {itinerary} selectedItinerary = {this.state.selectedItinerary} selectId = {this.selectId} activities = {this.state.activities}/>   
                        </React.Fragment>
                    ))}  
                </div>          
            );}       
    }
}

const mapStateToProps = (state) => {
    // console.log(state);
    return {
        itineraries: state.itineraries.itineraries,
        isloaded: state.itineraries.isloaded,
        activities: state.activities.activities,
    }
};
export default connect(mapStateToProps, {getItineraries}) (
    Itineraries
)
