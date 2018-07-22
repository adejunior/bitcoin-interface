import React, { Component } from 'react';
import { quoteService } from '../_service';
const CanvasJSReact = require('../canvasjs.react');
const CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

export class QuoteVariationChart extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: []
        };   
           
    }

    componentWillMount() {
        const chart = this.chart;
        quoteService.all()
        .then( res => {
            this.setState({data: res.data});
        })        
    }
    
    render() {
        const { data } = this.state;        
        const dataBuy = data.filter(x => x.type === 'buy').map(buy => ({x: new Date(buy.date), y: buy.price}));
        const dataSell = data.filter(x => x.type === 'sell').map(sell => ({x: new Date(sell.date), y: sell.price, label: sell.type}));

        const options = {
			animationEnabled: true,
            zoomEnabled: true,
			title:{
				text: "Quote BitCoin"
			},
            axisX: {
				title: "Dates"
			},
			axisY: {
				title: "Buy",
				prefix: "$",
				includeZero: false
			},
            axisY2: {
				title: "Sales",
				prefix: "$",
				includeZero: false
			},
			data: [{
				type: "spline",
				dataPoints: dataBuy
			},{
				type: "spline",
                axisYType: "secondary",
				dataPoints: dataSell}]
		}

        return (
            <CanvasJSChart options = {options}/>
        );
    }
}
