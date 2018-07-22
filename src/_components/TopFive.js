import React, { Component } from 'react';
import { quoteService } from '../_service'
import ReactTable from 'react-table';

export class TopFive extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: []
        };
    }

    componentWillMount() {
        quoteService.topfive(this.props.typeOperation)
        .then( res => {
            this.setState({data: res.data });
        })
    }

    render() {
        const { data } = this.state;
        return (
            <div>
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
                    />
            </div>
        );
    }
}

