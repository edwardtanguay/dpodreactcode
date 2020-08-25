import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

const pageTitle = 'Welcome';
class Home extends Component {
	render() {
		return (
			<div>
				<Helmet>
					<title>{pageTitle}</title>
				</Helmet>
				<h2 className="pageTitle">Welcome</h2>
				<p>Welcome to this site.</p>
			</div>
		);
	}
}

export default Home;