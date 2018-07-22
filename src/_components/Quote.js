import React, { Component } from 'react';
import { quoteService } from '../_service';
import axios from 'axios';

export class Quote extends Component {
    constructor(props){
        super(props);
        this.state = {
            median: '',
            average: '',
            deviation: '',
            error: ''
        }
    }

    componentWillMount() {
        const getAverage = (typeOperation) => {
            return quoteService.average(typeOperation);
        };

        const getMedian = (typeOperation) => {
            return quoteService.median(typeOperation);
        }

        const getDeviation = (typeOperation) => {
            return quoteService.deviation(typeOperation);
        }

        axios.all([getAverage(this.props.typeOperation), 
                   getMedian(this.props.typeOperation),
                   getDeviation(this.props.typeOperation)])
        .then(axios.spread( (average, median, deviation) => {
            this.setState({average: average.data });
            this.setState({median: median.data });
            this.setState({deviation: deviation.data });
        }))
        .catch(
            error => {
                this.setState({error: error.message})
            });
    }

    render() {
        const { average, median, deviation, error } = this.state;
        return (
            <div className="card">
                <div className="card-header">
                    <h3>Quote: {this.props.typeName}</h3>
                </div>
                <div className="card-body">
                    {!error ?
                    <div className="card-deck">              
                        <div className="card text-white bg-secondary mb-3" style={{minWidth: 10 + 'em'}}>
                            <div className="card-header">Average</div>
                            <div className="card-body">
                                <h5 className="card-title">{average}</h5>
                            </div>
                        </div>
                        <div className="card text-white bg-info mb-3" style={{minWidth: 10 + 'em'}}>
                            <div className="card-header">Median</div>
                            <div className="card-body">
                                <h5 className="card-title">{median}</h5>
                            </div>
                        </div>
                        <div className="card text-white bg-secondary mb-3" style={{minWidth: 10 + 'em'}}>
                            <div className="card-header">Deviation</div>
                            <div className="card-body">
                                <h5 className="card-title">{deviation}</h5>
                            </div>
                        </div>
                    </div>
                    : <h3>{error}</h3> }
                </div>
            </div>
            
        );
    }
}
