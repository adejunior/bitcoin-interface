import React, { Component } from 'react';
import { quoteService } from '../_service';
const CanvasJSReact = require('../canvasjs.react');
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

export class QuoteVariationChart extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: [],
            error: ''
        };   
    }

    componentWillMount() {
        quoteService.all()
        .then( res => {
            this.setState({data: res.data});
        })
        .catch(
            error => {
                this.setState({error: error.message})
            })        
    }
    
    render() {
        const { data, error } = this.state;        
        const dataBuy = data.filter(x => x.type === 'buy').map(buy => ({x: new Date(buy.date), y: buy.price}));
        const dataSell = data.filter(x => x.type === 'sell').map(sell => ({x: new Date(sell.date), y: sell.price}));

        const options = {
			animationEnabled: true,
            zoomEnabled: true,
			title:{
				text: "Varition Buy x Sales"
			},
            legend: {
				cursor: "pointer"				
			},
            axisX: {
				title: "Dates"
			},
			axisY: {
				title: "Buy",
                titleFontColor: "blue",
				lineColor: "blue",
				labelFontColor: "blue",
				tickColor: "blue",
				includeZero: false,
                showInLegend: true,
                valueFormatString: "####"
			},
            axisY2: {
				title: "Sales",
                titleFontColor: "red",
				lineColor: "red",
				labelFontColor: "red",
				tickColor: "red",
				includeZero: false,
                showInLegend: true,
                valueFormatString: "####"
			},
			data: [{
				type: "spline",
                lineColor:"blue",
				dataPoints: dataBuy,
                yValueFormatString: "####.##",
			},{
				type: "spline",
                axisYType: "secondary",
                lineColor:"red",
                yValueFormatString: "####.##",
				dataPoints: dataSell}]
		}

        return (
            <div>
            {!error ?
                <CanvasJSChart options = {options}/>
                : <h3>Chart: {error}</h3> }
            </div>
        );
    }
}
