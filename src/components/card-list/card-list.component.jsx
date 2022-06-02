import { Component } from 'react';
import './card-list.styles.css'
import Card from './card/card.component';

class CardList extends Component {
	render() {
		// console.log('CardList render')
		const { monster } = this.props;
		return (
			<div className='card-list'>
				{monster.map((monster) => {
					const { name, email, id} = monster;
					return (
						<div>
							<Card id={id} name={name} email={email}/>
						</div>
						)
				})}
			</div>
		);
	}
}

export default CardList;
