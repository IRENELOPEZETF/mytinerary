import React, { Component } from 'react';
// import Cities from '../Cities/Cities.js';
// import { getCities } from "../../store/actions/cityAction.js";


export class CityFilter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cityFilter: ""
        };
        // this.handleChange = this.handleChange.bind(this);
    }
  
    handleChange = (event) => {
        this.setState({ cityFilter: event.target.value });
        // console.log(this.props)
        this.props.onChange(event.target.value);
        // console.log(this.props);
    };

    render() {
        return (
            <div>
                <label htmlFor = "filter"> Filter by city  </label>     
                <input type="text" id="filter"
                    value={this.state.cityFilter}
                    onChange={this.handleChange}/>
            </div>
        )
    } 
} 
// console.log(this.props);

export default CityFilter;

