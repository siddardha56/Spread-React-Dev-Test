import * as React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./store";
import { MuiThemeProvider } from 'material-ui';
import MyAwesomeReactComponent from './components/MyAwesomeReactComponent';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

const App = () => (
	// <div>Hi</div>
		<MuiThemeProvider>
    		<MyAwesomeReactComponent />
  		</MuiThemeProvider>	
);

render(
	<App />,
	document.getElementById('root')
	);
