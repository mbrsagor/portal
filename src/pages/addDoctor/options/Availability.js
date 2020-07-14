import React, { Component } from 'react';
import AvailabilityService from '../../../services/AvailabilityService';
// import Select from 'react-select';

const availability_service = new AvailabilityService();

class Availability extends Component {

    constructor(props) {
        super(props);
        this.state = {
            availabilitys: ''
        }
    }

    componentDidMount() {
        var self = this;
        availability_service.getAvailability()
            .then(function (response) {
                self.setState({
                    availabilitys: response
                })
            }).catch(error => {
                console.log(error);
            })
    }

    render() {
        return (
            <>
                {this.state.availabilitys && this.state.availabilitys.map((availability, index) => {
                    return (
                        <option value={availability.id} key={index}>{availability.day}</option>
                    )
                })}
            </>
        );
    }
}

export default Availability;
