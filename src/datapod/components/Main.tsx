import React, { Component } from 'react';
import {
	Route,
	NavLink,
	BrowserRouter
} from 'react-router-dom';

import 'datapod/styles/main.scss';
import $ from 'jquery';
import Clock from 'react-live-clock';
import Home from 'datapod/components/Home';

import Info from 'custom/components/Info';
import News from 'custom/components/News';
import Flashcards from 'custom/components/Flashcards';

class Main extends Component {

	componentDidMount() {
		// jQuery fix for Boostrap/Typescript/React/mobile navbar issue not closing correctly
		const screenWidth = $(document).width() as number;
		if (screenWidth < 600) {
			$('.navbar .subMenuItem a, .navbar .appTitle').on('click', function () {
				$('.navbar-toggler').click();
			});
		}
	}

	render() {
		return (
			<BrowserRouter>
				<div>
					<nav className="navbar navbar-expand-lg navbar-light fixed-top bg-light">
						<NavLink className="nav-link" exact to="/"><span className="appTitle">Site</span></NavLink>
						<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
							<span className="navbar-toggler-icon" />
						</button>

						<div className="collapse navbar-collapse" id="navbarSupportedContent">
							<ul className="navbar-nav mr-auto">
								<li className="nav-item subMenuItem">
									<NavLink className="nav-link" to="/info">Info</NavLink>
								</li>
								<li className="nav-item subMenuItem">
									<NavLink className="nav-link" to="/news">News</NavLink>
								</li>
								<li className="nav-item subMenuItem">
									<NavLink className="nav-link" to="/flashcards">Flashcards</NavLink>
								</li>
							</ul>
						</div>
					</nav>

					<div className="pageContent">
						<Route exact path="/" component={Home} />
						<Route exact path="/info" component={Info} />
						<Route path="/news" component={News} />
						<Route path="/flashcards" component={Flashcards} />
					</div>

					<div>&nbsp;</div>
					<div>&nbsp;</div>


					<footer className="footer fixed-bottom">
						<div className="left"> <Clock format="YYYY-MM-DD HH:mm:ss" ticking timezone="Europe/Berlin" /> </div>
						<div className="right"><a href="https://github.com/edwardtanguay/base-react-001">base-react-001</a> ver. 00.01.01</div>
					</footer>
				</div>
			</BrowserRouter>
		);
	}
}

export default Main;
