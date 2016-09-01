import React from "react";
import Select from 'react-select';

class RoomType extends React.Component {
	
	constructor(props) {
        super(props);
        this.logChange = this.logChange.bind(this);
    }

    logChange(types) {
    	this.props.onChange(types);
    }

    render() {

    	let { placeholder, values, options } = this.props;

    	return <div className="container-room-type">
        	<Select multi 
        			placeholder={placeholder}
				    value={values}
				    options={options}
				    onChange={this.logChange}
			/>
		</div>
    }

}

export default RoomType;