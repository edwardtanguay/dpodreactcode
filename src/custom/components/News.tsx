import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

const pageTitle = 'News';

class News extends Component {

	render() {
		return (
			<div>
				<Helmet>
					<title>{pageTitle}</title>
				</Helmet>
				<h2 className="pageTitle">News</h2>
				<p>This is another simple HTML page. For a more sophisticated page that reads data from a JSON file, see the <a href="flashcards">Flashcards</a> page.</p>
			</div>
		);
	}
}

export default News;