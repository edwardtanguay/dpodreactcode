import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import FlashcardList from 'custom/components/FlashcardList';
import * as qstr from 'datapod/qtools/qstr';

const flashcards = require('custom/data/flashcards.json');

const pageTitle = 'Flashcards';

interface MainState {
	flashcards: any[]
}

class Flashcards extends Component<{}, MainState> {
	constructor(props: any) {
		super(props);
		this.state = {
			flashcards: []
		};
	}

	componentDidMount() {
		this.setState({
			flashcards
		});
	}

	render() {
		const filteredFlashcards = this.state.flashcards.filter(m => !m.back.includes('```') && !m.back.includes('http'));

		const test: string = qstr.chopLeft('one.two.three', 'one.');
		return (
			<div>
				<Helmet>
					<title>{pageTitle}</title>
				</Helmet>
				[{test}]
				<h2 className="pageTitle">Flashcards</h2>
				<FlashcardList flashcards={filteredFlashcards} />
			</div>
		);
	}
}

export default Flashcards;