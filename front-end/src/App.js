import React, { Component } from 'react';
import AddModal from './components/AddModal';
import Contact from './components/Contact';
import './App.css';
import {connect} from 'react-redux';
import {fetchContacts} from './actions/contactActions';

class App extends Component {
  constructor() {
        super();
        this.state = {
            search: "",
            searchFilter: "",
            sortBy: "",
            reverse: false,
            showFavourites: false,
            filterTags: ""
        }
        this.reset=this.reset.bind(this);
        this.setStates=this.setStates.bind(this);
        this.sortBy=this.sortBy.bind(this);
    }
    componentWillMount() {
      this.props.fetchContacts();
    }
    reset(){
      this.setState({
        search: "",
        searchFilter: "",
        sortBy: "",
        reverse: false,
        showFavourites: false,
        filterTags: ""
      });
      document.getElementById("sortBy").value = "";
    }
    setStates(e){
      if (e.target.name==="showFavourites"){
        this.setState({
          showFavourites: !this.state.showFavourites
        })
      }
      else {
        this.setState({
          [e.target.name]: e.target.value
        })
      }
    }
    sortBy(e){
      if (e.target.value.length>0) {
        let order = e.target.value.substring(0,2);
        let property = e.target.value.substring(2,e.target.value.length);
        this.setState({
          sortBy: property,
          reverse: order==="ZA"
        })
      }
      else {
        this.setState({
          sortBy: "",
          reverse: false
        })
      }
    }
    arraySort(arr, property){
      function compare(a,b) {
        if (a[property].toLowerCase() < b[property].toLowerCase())
          return -1;
        if (a[property].toLowerCase() > b[property].toLowerCase())
          return 1;
        return 0;
      }
      return this.state.reverse ? arr.sort(compare).reverse() : arr.sort(compare)
    }
    render() {
        let contacts=this.props.contacts;
        if (this.state.showFavourites) {
          contacts=contacts.filter(contact=>{
            return contact.favourite
          })
        }
        if (this.state.filterTags) {
          contacts=contacts.filter(contact=>{
            for (let i=0; i<contact.tags.length; i++){
              if (contact.tags[i]===this.state.filterTags) {
                return true;
              }
            }
            return false;
          })
        }
        if (this.state.search) {
          contacts=contacts.filter(contact=>{
            if (this.state.searchFilter) {
              return (String(contact[this.state.searchFilter]).toLowerCase().includes(this.state.search.toLowerCase()))
            }
            else {
              for (const key in contact) {
                if (key !== "picture" && String(contact[key]).toLowerCase().includes(this.state.search.toLowerCase())) {
                    return true;
                  }
                }
                return false;
              }
            });
        }
        if (this.state.sortBy) {
          contacts=this.arraySort(contacts, this.state.sortBy);
        }
        let contactsJsx = contacts.map((contact,i)=>{
            return <Contact details={contact} key={i}/> 
        })
        let tagsJsx = this.props.tags.map((tag,i)=>{
          return <option value={tag} key={i}>{tag}</option>
        })
        return (
            <div className="container" >
              <h1 className="text-center">My Contacts</h1>
              <div className="row">
                <button className="btn btn-primary pull-right" data-toggle="modal" data-target="#add">Add New Contact </button>
                <AddModal />
              </div>
              <div className="row form-inline">
                <input className="form-control" type="text" name="search" placeholder="Search..." onChange={this.setStates} value={this.state.search}/>
                <label for="searchFilter">in: </label>
                <select className="form-control" name="searchFilter" onChange={this.setStates} value={this.state.searchFilter} >
                  <option value="">All</option>
                  <option value="firstName">First Name</option>
                  <option value="lastName">Last Name</option>
                  <option value="email">Email</option>
                  <option value="phone">Phone Number</option>
                  <option value="tags">Tags</option>
                </select>
              </div>
              <div className="row form-inline">
                <div className="pull-right">
                  <label for="sortBy">Sort By:</label>
                  <select className="form-control" name="sortBy" id="sortBy" onChange={this.sortBy}>
                    <option value="">None</option>
                    <option value="AZfirstName">First Name A-Z</option>
                    <option value="ZAfirstName">First Name Z-A</option>
                    <option value="AZlastName">Last Name A-Z</option>
                    <option value="ZAlastName">Last Name Z-A</option>
                  </select>
                </div>
              </div>
              <div className="row form-inline">
                <div className="pull-right">
                  <label for="filterTags">Filter by Tag:</label>
                  <select className="form-control" name="filterTags" onChange={this.setStates} value={this.state.filterTags} >
                    <option value="">All</option>
                    {tagsJsx}
                  </select>
                  </div>
              </div>
              <div className="row form-inline">
                <div className="pull-right">
                  <input type="checkbox" name="showFavourites" onClick={this.setStates} checked={this.state.showFavourites} />Favourites Only
                </div>
              </div>
              <div className="row form-inline">
                <div className="pull-right">
                  <button className="btn" onClick={this.reset}>Reset Filters</button>
                </div>
              </div>
              <br />
              <div className="row">
                {contacts.length>0 ? 
                <table className="table table-striped">
                    <tbody>
                        {contactsJsx}
                    </tbody>
                </table> 
                : "No contacts found"}
              </div>
            </div>
        )
    }
}



const mapStateToProps = (state) => {
  return {
    contacts: state.contacts,
    tags: state.tags
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchContacts: () => dispatch(fetchContacts())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);