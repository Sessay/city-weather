import React from 'react';
import './index.css';
import 'antd/dist/antd.css'
import { Button } from 'antd';

class App extends React.Component{
	render () {
		return (
			<Button onClick={() => this.props.history.push('carousels')} className="startButton" size="large">Start App</Button>
		);
	}
}
  
export default App