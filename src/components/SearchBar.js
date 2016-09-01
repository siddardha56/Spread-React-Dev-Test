import React from "react";
import Select from 'react-select';

class SearchBar extends React.Component {

	constructor(props) {
        super(props);
        this.performSearch = this.performSearch.bind(this);
        this.setPlace = this.setPlace.bind(this);
    }

    performSearch(value) {
    	return this.props.loadOptions(value);
    }

    setPlace(place) {
    	this.props.onChange(place);
    }

    render() {

    	let { placeholder, formname, place } = this.props;

    	return <div className="searchBar">		        
			<Select.Async
				placeholder={placeholder}
			    name={formname}
			    loadOptions={this.performSearch}
			    value={place}
			    onChange={this.setPlace}
			/>
	     </div>
    }
}

export default SearchBar;