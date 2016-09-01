import * as React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./store";
import { MuiThemeProvider } from 'material-ui';
import SpreadMain from './containers/SpreadMain';
import './css/app.css';
const App = () => (
		<MuiThemeProvider>
    		<SpreadMain />
  		</MuiThemeProvider>	
);

render(
	<App />,
	document.getElementById('root')
	);
