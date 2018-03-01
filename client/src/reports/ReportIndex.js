import React from 'react';
import ReportCreate from './ReportCreate';
import { Container, Col } from 'reactstrap';
import styled from 'styled-components';
import '../Style/dashboard.css'
import ReportsTable from './ReportTable';
import ReportEdit from './ReportEdit';


class ReportIndex extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            reports: []
        }

        this.fetchReports = this.fetchReports.bind(this);
        this.updateReportsArray = this.updateReportsArray.bind(this);
        this.reportDelete = this.reportDelete.bind(this);
    }

    componentWillMount() {
        this.fetchReports()
    }

    fetchReports() {
        fetch("http://localhost:3000/api/report", {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        })
            .then((res) => res.json())
            .then((reportData) => {
                return this.setState({ reports: reportData })
            })
    }

    updateReportsArray() {
        this.fetchReports()
    }

    reportDelete(event) {
        fetch("http://localhost:3000/api/report", {
            method: 'DELETE',
            body: JSON.stringify({ report: { id: event.target.id } }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        })
            .then((res) => this.updateReportsArray())
    }

    render() {
        const reports = this.state.reports.length >= 1 ? <ReportsTable reports={this.state.reports} token={this.props.token} delete={this.reportDelete} /> : <h2>Log a report to see table</h2>

        return (
            <div>
                {/* <username_div> */}
                {/* <h2>{`${user}`}</h2> */}
                {/* </username_div> */}
                <Container>
                    <div className='dashboardText'>
                        <h1>My Dashboard</h1>
                    </div>
                    <div className="row">
                    <Col md="4">
                        <ReportCreate token={this.props.token} updateReportsArray={this.updateReportsArray} />
                    </Col>
                    <Col id='reportcol' md="8">
                        {reports}
                    </Col>
                    </div>
                </Container>
            </div>
        )
    }
}

export default ReportIndex;