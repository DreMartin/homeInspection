import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';


class ReportCreate extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            result: '',
            description: '',
            def: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }


    handleSubmit(event) {
        event.preventDefault();

        fetch("http://localhost:3000/api/report", {
            method: 'POST',
            body: JSON.stringify({ report: this.state }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        })
            .then((res) => res.json())
            .then((reportData) => {
                this.props.updateReportsArray()
                // this is where you would clear out the fields 
            })
    }

    render() {
        return (
            <div>
                <h3>Create your new report</h3>
                <hr />
                <Form onSubmit={this.handleSubmit} >
                    <FormGroup>
                        <Label for="clientName">Client</Label>
                        <Input id="clientName" type="text" name="clientName" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="clientAddress">Address</Label>
                        <Input id="clientAdress" type="text" name="clientAddress" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="date">Inspection Date</Label>
                        <Input id="date" type="date" name="date" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="notes">Notes</Label>
                        <Input id="notes" type="text" name="notes" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="propertyNotes">Property and Site</Label>
                        <Input id="propertyNotes" type="text" name="propertyNotes" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exteriorNotes">Exterior</Label>
                        <Input id="exteriorNotes" type="text" name="exteriorNotes" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="garageNotes">Garage</Label>
                        <Input id="garageNotes" type="text" name="garageNotes" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="roofNotes">Roof</Label>
                        <Input id="roofNotes" type="text" name="roofNotes" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="plumbingNotes">Plumbing</Label>
                        <Input id="plumbingNotes" type="text" name="plumbingNotes" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="electricalNotes">Electrical</Label>
                        <Input id="electricalNotes" type="text" name="electricalNotes" onChange={this.handleChange} />
                    </FormGroup>
                    <Button type="submit" color="primary"> Submit </Button>
                </Form>
            </div>
        )
    }
}

export default ReportCreate;