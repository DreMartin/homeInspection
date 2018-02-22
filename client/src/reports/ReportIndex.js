import React from 'react';
import ReportCreate from './ReportCreate';
import { Container, Row, Col } from 'reactstrap';
import ReportsTable from './ReportTable';

class ReportIndex extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            reports: []
        }

        this.fetchReports = this.fetchReports.bind(this);
        this.updateReportsArray = this.updateReportsArray.bind(this);
        this.reportDelete = this.reportDelete.bind(this);
    }

    componentWillMount(){
        this.fetchReports()
    }

    fetchReports(){
        fetch("http://localhost:3000/api/report", {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
              })
        })
        .then((res) => res.json())
        .then((reportData) => {
            return this.setState({reports: reportData})
        })
    }

    updateReportsArray(){
        this.fetchReports()
    }

    reportDelete(event){
        fetch("http://localhost:3000/api/report", {
            method: 'DELETE',
            body: JSON.stringify({report: {id:event.target.id}}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
              })
        })
        .then((res) => this.updateReportsArray())
    }

    render() {
        const reports = this.state.reports.length >= 1 ? <ReportsTable reports={this.state.reports} token={this.props.token} delete={this.reportDelete}/> : <h2>Log a report to see table</h2> 

        return (
            <Container>
            <Row>
                <Col md="3">
                    <ReportCreate token = {this.props.token} updateReportsArray={this.updateReportsArray}/>
                </Col>
                <Col md="9">
                    {reports}
                </Col>
            </Row>
        </Container>
        )
    }
}

export default ReportIndex;