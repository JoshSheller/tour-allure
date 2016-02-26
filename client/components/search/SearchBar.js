import React from 'react'


export default class SearchBar extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
        name: "",
        location: ""
    }
	}

	handleInputChange(prop, e) {
    var newState = {};
    newState[prop] = e.target.value;
    this.setState(newState);
  }

	render() {
		return (
			<div>
				 <form class="searchForm" >
		      <input class="searchName" value={this.state.name} placeholder="Search for Tour Name" onChange = {this.handleInputChange.bind(this, "name")}/>
          <input class="searchLocation" value={this.state.location} placeholder="Put Location" onChange = {this.handleInputChange.bind(this,"location")}/>
		      <input type="submit" onClick = { (e) => this.props.getToursFromDatabase(this.state)}/>
			   </form>
			</div>
		)
	}
};