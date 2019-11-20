import React, { Component } from "react";
import "../App.css";
import "../index.css"
import { connect } from "react-redux";
import { getItineraries } from "../store/actions/itineraryAction.js"; 
import  Toggle  from "./Toggle.js";


export class Itineraries extends Component {
    constructor(props) {
        super(props);
        this.state = {
            itineraries: [],
            city: {},
            selectedItinerary: ""
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
            // console.log(this.setState.city.name);
    }

    selectId=(itineraryId) =>{
                     
         this.setState({
             selectedItinerary: itineraryId
         })
            
    }
  
    render() {
        // console.log(this.props.match.params.cityId);
        // console.log(this.props.cities);
        // console.log(this.props.isloaded);
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
                        <Toggle itinerary = {itinerary} selectedItinerary = {this.state.selectedItinerary} selectId = {this.selectId}/>
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
    }
};
export default connect(mapStateToProps, {getItineraries}) (
    Itineraries
)
