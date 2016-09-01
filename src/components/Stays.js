import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import Subheader from 'material-ui/Subheader';

class Stays extends React.Component {
	
	constructor(props) {
        super(props);
    }

    render() {
    	let {stay} = this.props;

    	const styles = {
		  root: {
		    display: 'flex',
		    flexWrap: 'wrap',
		    justifyContent: 'space-around',
		  },
		  gridList: {
		  	width:1400,
		    marginBottom: 24
		  }
		};

    	return <div style={styles.root}>
    		<GridList
		      cols={3}
		      cellHeight={300}
		      padding={10}
		      style={styles.gridList}
		    >
		      <Subheader style={{'font-size': '16px'}}>Stays</Subheader>
		      {stay.map((tile, index) => (
		        <GridTile
		          key={index}
		          title={tile.name}
		          actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
		          subtitle={<span><b>{tile.type}</b> ---  {tile.guidePrice} {tile.currency} </span>}
		        >
		          <img src={tile.media.images && tile.media.images[0]} />
		        </GridTile>
		      ))}
		    </GridList>
		</div>
    }

}

export default Stays;