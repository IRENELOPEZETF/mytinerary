import React, { Component } from "react";
import "../../App.css";
import "../../index.css"
import { connect } from "react-redux";
import { getCities } from "../../store/actions/cityAction.js"; 
import { NavLink } from "react-router-dom";
import { CityFilter } from "./Cityfilter.js";


export class Cities extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // cities: [],
            filteredCities: []
        };
    }

    componentDidMount() {
       
        this.props.getCities()
    }

    filterCity = (cityFilter) => {
        let filteredCities = this.props.cities;
        filteredCities = filteredCities.filter(city => {
            let cityName = city.name.toLowerCase() 
        // + city.country.toLowerCase()
            return cityName.indexOf(
            cityFilter.toLowerCase()) !== -1
        })
        this.setState({
            filteredCities
            });
        // console.log(filteredCities);
    }

    render() {
        // if (filteredCities) está vacía, muéstrame (return) (this.props.cities), sinó 
        // const { cities } = this.props
        let filteredCities = this.state.filteredCities                
        
        // console.log("todas las cities", this.props.cities);
        // console.log("en el render", this.state.filteredCities);
            
        // console.log(this.props.isloaded);
        // if (cities.isLoaded) {
        // return (
        //     <div><h1 className="isLoaded">LOADING...</h1></div>
        // )} else {
        if (this.state.filteredCities.length === 0) {
                filteredCities = this.props.cities
        }
                        
        return (
            <div className="cityList">
                <div className="citiesFilter">
                    <h1 className="h1cityList">Cities</h1>
                <CityFilter onChange={this.filterCity}/>
                </div>
                <div className="ulCity">
                    {filteredCities.map(city => (
                        <React.Fragment key={city._id}> 
                            <NavLink className = "cityLink" to = { "/itineraries/"+city._id }>
                                <button className="liCity">
                                    {city.name}
                                </button>
                            </NavLink>
                        </React.Fragment>   
                    ))}
                </div>
            </div>
        );
    }            
}

const mapStateToProps = (state) => {
    // console.log(state);
    return {
        cities: state.cities.cities,
        isloaded: state.cities.isloaded,
        filteredCities: state.cities.cities,
    }
};

export default connect(mapStateToProps, {getCities})(
    Cities,
);