import React from "react";
import { FlatButton, AutoComplete } from 'material-ui';
import fetch from 'isomorphic-fetch';
import ActionSearch from 'material-ui/svg-icons/action/search';
import {fullWhite} from 'material-ui/styles/colors';

class MyAwesomeReactComponent extends React.Component {
    constructor(props) {
        super(props);
        this.onUpdateInput = this.onUpdateInput.bind(this);
        this.state = {
        	dataSource: []
        }
    }

    onUpdateInput(inputValue) {
    	this.setState({
      		inputValue: inputValue
    	}, function() {
			this.performSearch().then( function(res){
				this.setState({
			   		dataSource: res.map(cities => cities.l)
			   	})
				return res
			});			
    	});
  	}

  	performSearch() {
    	var self = this,
      	url  = "http://localhost:8003/api/v1/search/cities/" + this.state.inputValue;
	    if(this.state.inputValue != '') {
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
		    .then(function (response) {

		    	return response;
		    	
		    	// var ss = response.map(cities => cities.l)
		    	// // console.log(ss);

		    	// // this.setState({
		    	// // 	dataSource: response.map(cities => cities["1"])
		    	// // })

		    });
    	}
	}

    render() {

		const style = {
			margin: 12,
		};

		console.log(this.state.dataSource);
        
        return <div>
        	<AutoComplete 
        		dataSource= {this.state.dataSource}
        		onUpdateInput = {this.onUpdateInput} />
        	
        	<FlatButton 
        		backgroundColor="#00BCD4"
        		hoverColor="#00AAFF"
        		icon={<ActionSearch color={fullWhite} />}
        		style={style}
		    />

        	{/*<FlatButton label="Default" />
            <FlatButton label="Primary" primary={true} />
            <FlatButton label="Secondary" secondary={true} />
            <FlatButton label="Disabled" disabled={true} />*/}
          </div>;
    }
}

export default MyAwesomeReactComponent;

// import React from 'react';
// import { RaisedButton } from 'material-ui';

// class MyAwesomeReactComponent extends React.Component {
  
//   render() {
//   	return <RaisedButton label="Default" />
//   }
// };

// export default MyAwesomeReactComponent;