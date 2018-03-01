/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ReportEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>
        <Button color="" onClick={this.toggle}>Update</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>View/Edit your report</ModalHeader>
          <ModalFooter>
          {/* <Form hover striped onSubmit={this.handleSubmit} >
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
                </Form> */}
            {/* <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button> */}
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ReportEdit;