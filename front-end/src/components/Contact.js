import React, { Component } from 'react';
import {connect} from 'react-redux';
import {editContact, deleteContact} from '../actions/contactActions';
import EditModal from './EditModal';

class Contact extends Component {
    render(){
        return (
            <tr>
                <td className="col-xs-3"><img alt={"photo_for_contact_"+this.props.details.id} className="contact-photo" src={this.props.details.picture ? this.props.details.picture : "https://www.finearttips.com/wp-content/uploads/2010/05/avatar.jpg"} /> </td>
                <td className="col-xs-6">
                    <p><strong>Name: </strong>{this.props.details.firstName + " " + this.props.details.lastName}{this.props.details.favourite ? <i className="fa fa-star"/>:null}</p>
                    <p><strong>Phone: </strong>{this.props.details.phone}</p>
                    <p><strong>Email: </strong>{this.props.details.email}</p>
                    <p><strong>Tags: </strong>{this.props.details.tags ? this.props.details.tags.join(", "): null}</p>
                </td>
                <td className="col-xs-3">
                  <button className="btn btn-info" data-toggle="modal" data-target={"#edit"+this.props.details.id}>Edit</button>
                  <br />
                  <button className="btn btn-danger" onClick={()=>{this.props.deleteContact(this.props.details.id)}}>Delete</button>
                  <br />
                  <button className="btn btn-success" onClick={()=>{this.props.editContact({"favourite": !this.props.details.favourite}, this.props.details.id)}}>{this.props.details.favourite ? "Unfavourite" : "Favourite"}</button>
                  <EditModal details={this.props.details} />
                </td>
            </tr>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      editContact: (updateData, id) => dispatch(editContact(updateData, id)),
      deleteContact: (id) => dispatch(deleteContact(id))
    }
}
  
export default connect(null, mapDispatchToProps)(Contact);