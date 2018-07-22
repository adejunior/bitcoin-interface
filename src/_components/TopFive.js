import React, { Component } from 'react';
import { quoteService } from '../_service'
import ReactTable from 'react-table';

export class TopFive extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: [],
            error: ''
        };
    }

    componentWillMount() {
        quoteService.topfive(this.props.typeOperation)
        .then( res => {
            this.setState({data: res.data });
        })
        .catch(
            error => {
                this.setState({error: error.message})
            })
    }

    render() {
        const { data, error } = this.state;    
        return (
            <div>
                 <div className="card border-secondary">
                <div className="card-header">
                    <h3> Quote Top Five: {this.props.typeName} </h3>
                </div>
                {error == false ?
                <ReactTable data={data}
                    columns={[
                        {
                        Header: "Date",
                        accessor: 'date'             
                        },
                        {
                        Header: 'Price',
                        accessor: 'price'              
                        },
                        {
                        Header: 'Amount',
                        accessor: 'amount'              
                        },
                        {
                        Header: 'Tid',
                        accessor: 'tid'              
                        },
                        {
                        Header: 'Type',
                        accessor: 'type'              
                        }
                    ]}
                    defaultPageSize={5}
                    className="-striped -highlight"
                    showPageSizeOptions={false}
                    showPagination={false}
                    />
                    : <h3>{error}</h3> }
                </div>
            </div>
        );
    }
}

