import { Router, Route,Switch } from 'react-router';
import { HashRouter } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import React from 'react';
import AddPeople from './AddPeople';
import AddTask from './AddTask';
import './add.css';

class Add extends React.Component
{
	constructor()
	{
		super();
		this.state = {
			mode:'passive',
			activeContent: <AddTask/>
		}
	}

	display = (a) =>
	{
		if(a === 'people')
		{
			this.setState({activeContent:<AddPeople/>})
		}
		else
		{
			this.setState({activeContent:<AddTask/>})
		}
	}

	render()
	{
		return(
                <div>
				<div id = 'addframe'>
					<div id = 'addmenu'>
						<div id = 'menubar'><button id = 'addmenuButton'  onClick = {()=>this.display('people')} >People</button></div>
						<div id = 'menubar'><button id = 'addmenuButton'  onClick = {()=>this.display('task')}>Task</button></div>
						<div id = 'menubar'><button id = 'addmenuButton'>People</button></div>
						<div id = 'menubar'><button id = 'addmenuButton'>Task</button></div>
					</div>
					<div id = 'addmenu'>
						<div id = 'menubar'><button id = 'addmenuButton'>People</button></div>
						<div id = 'menubar'><button id = 'addmenuButton'>Task</button></div>
						<div id = 'menubar'><button id = 'addmenuButton'>People</button></div>
						<div id = 'menubar'><button id = 'addmenuButton'>Task</button></div>
					</div>
					</div>
					<div id = 'content'>{this.state.activeContent}</div>
					</div>
			)
	}
}
export default Add;