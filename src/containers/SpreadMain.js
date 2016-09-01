import React from "react";
import fetch from 'isomorphic-fetch';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import SearchBar from '../components/SearchBar';
import RoomType from '../components/RoomType';
import Stays from '../components/Stays';
// import ActionSearch from 'material-ui/svg-icons/action/search';
// import {fullWhite} from 'material-ui/styles/colors';
// import { FlatButton, AutoComplete } from 'material-ui';
// import Multiselect from 'react-widgets/lib/Multiselect';
// import 'react-widgets/lib/less/react-widgets.less';

class SpreadMain extends React.Component {

    constructor(props) {
        super(props);

        this.performSearch = this.performSearch.bind(this);
        this.logChange = this.logChange.bind(this);
        this.setPlace = this.setPlace.bind(this);
        this.searchAction = this.searchAction.bind(this);
        
        this.state = {
        	value: [],
        	place: null,
        	results: {
        		searchresults : []
        	},
	    	showStays: false
        }
    }

    searchAction() {

     	let data;
     	let url = 'http://localhost:8003/api/v1/search/fsearch'
 	
 		data = {
 			room_type: this.state.value.map(cities => cities.value),
 			q: this.state.place.value,
 			t: 'property'
 		}

    	fetch(url, {
			method: 'post',
            body: JSON.stringify(data),
            credentials: 'same-origin',
            headers: {
            	'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            dataType: 'json'
        })
        .then(response => response.json())
        .then(json => {
        	this.setState({
        		results: json,
        		showStays: true
        	})
        	return json;	
	    });

    }

  	performSearch(inputValue) {
  		// console.log(inputValue);
  		var url  = "http://localhost:8003/api/v1/search/cities/" + inputValue;
	    if(inputValue != '')
	    	return fetch(url, {
		        method: 'GET',
		        credentials: 'same-origin',
		        headers: {
		            'Accept': 'application/json',
		            'Content-Type': 'application/json'
		        },
		        dataType: 'json'
		    })
		    .then((response) => {
		        return response.json();
		    })
		    .then(json => {
		       	return { options: json.map(cities => {
			   		return {
			   			label:cities.l,
			   			value:cities.l
			   		}
			   	})
			   }	
		    });
    	
	}

	setPlace(place) {
		this.setState({
			place
		})
	}

	logChange(val) {
	    this.setState({value: val})
	}

    render() {

    	var options = [
		    { value: 'House', label: 'House' },
		    { value: 'Apartment', label: 'Apartment' },
		    { value: 'Hotel Room', label: 'Hotel Room' }
		];

        return <div>
        	<div className="header">
	        	
	        	<SearchBar 
	        		placeholder="Take Me To.."
	        		formname="form-field-name"
	        		loadOptions={this.performSearch}
	        		place={this.state.place}
					onChange={this.setPlace}
	        	/>
	        		
	        	<RoomType
	        		placeholder="Select Room Type"
	        		values={this.state.value}
	        		onChange={this.logChange}
	        		options={options}
	        	/>

				<button className="searchBtn" onClick={event => {this.searchAction(); event.stopPropagation()}}>
					Search
				</button>

        	</div>
        	<div className="resultContainer">
        	{this.state.showStays ?  
        		this.state.results.searchresults.length !== 0 ? <Stays stay={this.state.results.searchresults}/> : <h1>No Results found</h1>
        		: ''
        	}

        	</div>      		        	        	
          </div>;
    }
}

export default SpreadMain;