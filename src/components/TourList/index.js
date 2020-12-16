import React, { Component } from 'react'
import Tour from '../Tour';
import './tourlist.scss';
import { tourData } from '../../tourData';

export default class TourList extends Component {
    state = {
        tours: tourData,
    }
    removeTour = (id) => {
        const newTours = this.state.tours.filter((tour) => tour.id !== id)
        this.setState({
            tours: newTours
        })
    }
    

    render() {
        const {tours} = this.state
        return (
            <div className="tourlist">
                {tours.map((tour) => (<Tour key={tour.id} tour={tour} removeTour={this.removeTour} />))}
            </div>
        )
    }
}
