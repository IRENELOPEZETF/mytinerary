import React, { Component } from "react";
import "../App.css";
import "../index.css"
import { connect } from "react-redux";
import { getItineraries } from "../store/actions/itineraryAction.js"; 


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
                <div className="itineraryList">
                <h1 className="h1cityList">Itineraries</h1>             
                    <div className="ulCity">
                    {itineraries.map(itinerary => (
                        <React.Fragment key={itinerary._id}>
                        <li className="liCity">{itinerary.title}, {itinerary.duration} h</li>
                        </React.Fragment>
                    ))}
                    
                    </div>
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
