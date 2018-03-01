import React from 'react';
import moment from 'moment';
import { Table, Button } from 'reactstrap';
import ReportEdit from './ReportEdit';


const ReportTable = (props) => {

    
    return (
        <div className="split left">
        <div className="centered">
            <h3>My reports</h3>
            <hr />
            <Table hover striped>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Client</th>
                        <th>Date</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.reports.map((report, id) => {
                            var date = new Date(report.date).toDateString();
                            return (
                                <tr key={id}>
                                    <th scope="row">{report.id}</th>
                                    <td>{report.clientName}</td>
                                    <td>{moment(date).format('MM-DD-YYYY')}</td>
                                    <td><ReportEdit> <Button id={report.id} onClick={props.get} color="">View/Edit</Button></ReportEdit></td>
                                    <td><Button id={report.id} onClick={props.delete} color="danger">Delete</Button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
            </div>
        </div>
    );
}

export default ReportTable;