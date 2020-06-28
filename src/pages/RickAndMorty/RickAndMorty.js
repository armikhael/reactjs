/** @format */

import React from 'react'
import BadgeHero from '../../components/BadgeHero/BadgeHero'

import './RickAndMorty.css'

class RickAndMorty extends React.Component {
	state = {
		nextPage: 1,
		loading: true,
		error: null,
		data: {
			results: [],
		},
	}

	componentDidMount() {
		this.fetchCharacters()
	}

	fetchCharacters = async () => {
		this.setState({
			loading: true,
			error: null,
		})
		try {
			const response = await fetch(
				`https://rickandmortyapi.com/api/character?page=${this.state.nextPage}`
			)
			const data = await response.json()
			this.setState({
				loading: false,
				nextPage: this.state.nextPage + 1,
				data: {
					info: data.info,
					results: [].concat(this.state.data.results, data.results),
				},
			})
		} catch (error) {
			this.setState({
				loading: false,
				error: error,
			})
		}
	}

	render() {
		if (this.state.error) {
			return `Error: ${this.state.error.message}`
		}
		return (
			<React.Fragment>
				<BadgeHero />
				<ul className='row'>
					{this.state.data.results.map((character) => (
						<li className='col-6 col-md-3' key={character.id}>
							{character.name}
							<img src={character.image} width='50px'></img>
						</li>
					))}
				</ul>
				{this.state.loading && <div>loading</div>}
				<center>
					{!this.state.loading && (
						<button onClick={() => this.fetchCharacters()}>
							Load More {this.state.nextPage - 1}
						</button>
					)}
				</center>
			</React.Fragment>
		)
	}
}

export default RickAndMorty
