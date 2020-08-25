import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

const pageTitle = 'Info';
class Info extends Component {
	render() {
		return (
			<div>
				<Helmet>
					<title>{pageTitle}</title>
				</Helmet>
				<h2 className="pageTitle">Info</h2>
				<p>This is a simple HTML page much like the <a href="news">News</a> page.</p>
			</div>
		);
	}
}

export default Info;