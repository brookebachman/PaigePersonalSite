import React from 'react';
import './App.css';
import { Route, Switch, Router, BrowserRouter, Redirect } from 'react-router-dom';
import NavvBar from './components/NavvBar.js';
import About from './components/About.js';
import Reviews from './components/Reviews.js';
import Services from './components/Services.js';
import Appointments from './components/Appointments'

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<>
					<div className="app text-white">
						<NavvBar />
						<Route exact path="/about" render={(renderProps) => <About />} />
						<Route
							exact
							path="/services"
							render={(renderProps) => (
								<Services
									setUser={this.state.user}
									favorites={this.state.favorites}
									addFav={this.addFav}
									setBirthID={this.setBirthID}
									content={this.state.content}
								/>
							)}
						/>
						<Route
							exact
							path="/appointments"
							render={(renderProps) => (
								<Appointments
								
								/>
							)}
						/>
						<Route exact path="/reviews" render={(renderProps) => <Reviews />} />
					</div>
				</>
			</Switch>
		</BrowserRouter>
	);
}

export default App;
