import React, { Component } from 'react';
import * as qstr from '../../datapod/qtools/qstr';
import 'custom/styles/main.scss';

const cardBack = require('custom/images/card_back.png');


interface IFlashcard {
	category: string,
	kind: string,
	front: string,
	back: string
}

class Flashcard extends Component<IFlashcard> {
	render() {
		return (
			<div className="flashcard">
				<div className="cardArea">
					<img src={cardBack} alt="greybox" />
				</div>
				<div className="infoArea">
					<div className="categoryKind"><span className="category">{this.props.category}</span> {qstr.capitalizeFirstLetter(this.props.kind)} </div>
					<div className="front">{qstr.capitalizeFirstLetter(this.props.front)}</div>
					<div className="back"><span>{this.props.back}</span></div>
				</div>
			</div>
		)
	}
}

export default Flashcard;
