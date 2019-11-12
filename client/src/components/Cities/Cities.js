import React, { Component } from "react";
import "../../App.css";
import "../../index.css"
import { connect } from "react-redux";
import { getCities } from "../../store/actions/cityAction.js"; 
import { NavLink } from "react-router-dom";
// import { Itineraries } from "../Itineraries.js";
import { CityFilter } from "./Cityfilter.js";


export class cities extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filteredCities: [],
            cities: [],
        };
    }

    componentDidMount() {
         
        // if (this.props.filteredCities.payload.length === 0) {
        //     this.props.getCities();
        //     return;
        // }
        this.props.getCities();
    }
    // componentWillReceiveProps(nextProps) {
    //     if (nextProps.cities !== this.props.cities) {
    //         this.setState({ filteredCities: this.props.cities.payload
    //         })
    //     }
    // }
        filterCity = (cityFilter) => {
            let filteredCities = this.state.cities;
            filteredCities = filteredCities.filter(city => {
                let cityName = city.name.toLowerCase() 
            // + city.country.toLowerCase()
                return cityName.indexOf(
                cityFilter.toLowerCase()) !== -1
            })
            this.setState({
                filteredCities
                });
            //  console.log(this.state.filteredCities);   
            };

        render() {
            
            const { cities } = this.props;
                            
            // console.log(this.props.cities);
            // console.log(this.props.isloaded);
            
            // if (cities.isLoaded) {
            
            // return (
            //     <div><h1 className="isLoaded">LOADING...</h1></div>
            // )} else {
            
            
            return (
                <div className="cityList">
                <h1 className="h1cityList">Cities</h1>
                
                    <CityFilter onChange={this.filterCity}/>
                    
                <div className="ulCity">
                    {cities.map(city => (
                        <React.Fragment key={cities._id}>
                        
                            <NavLink className = "cityLink" to = { "/itineraries" }><button className="liCity">
                            {city.name}</button></NavLink>
                          
                        </React.Fragment>
                    ))}
                    
                </div>
                </div>

            );}
                    }


const mapStateToProps = (state) => {
    // console.log(state);
    return {
        Cities: state.cities.Cities,
        isLoaded: state.cities.isLoaded,
        // filteredCities: state.cities.cities,
    }
};

export default connect(mapStateToProps, {getCities}) (
    cities
);




