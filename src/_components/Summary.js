import React, { Component } from 'react';
import { TopFive } from './';
import { Quote } from './';
import { QuoteVariationChart } from './'

export class Summary extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row pt-5">
                        <div className="col-md">
                        <Quote typeName="Buys" typeOperation="buy"/>
                        </div>
                    </div>
                    <div className="row pt-5">
                        <div className="col-md">
                             <Quote typeName="Sales" typeOperation="sell"/>                                            
                        </div>
                    </div> 
                    <div className="row pt-5">
                        <div className="col-md">
                            <TopFive typeName="Buys" typeOperation="buy"/>
                        </div>
                    </div>                     
                    <div className="row pt-5">
                        <div className="col-md">
                            <TopFive typeName="Sales" typeOperation="sell"/>
                        </div>
                    </div>                    
                    <div className="row pt-5">
                        <div className="col-md">
                            <QuoteVariationChart/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}