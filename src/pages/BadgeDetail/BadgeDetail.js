/** @format */

import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Badge from '../../components/Badge/Badge'
import BadgeHero from '../../components/BadgeHero/BadgeHero'
import Loading from '../../components/Loading/Loading'
import DeleteBadgeModal from '../../components/DeleteBadgeModal/DeleteBadgeModal'

import api from '../../api'

class BadgeDetail extends React.Component {
	state = {
		loading: true,
		error: null,
		data: undefined,
		modadIsOpen: false,
	}

	componentDidMount() {
		this.fetchData()
	}

	fetchData = async (item) => {
		this.setState({ loading: true, error: null })
		try {
			const data = await api.badges.read(this.props.match.params.badgeId)
			console.log(data)
			this.setState({
				loading: false,
				data: data,
			})
		} catch (error) {
			this.setState({ loading: false, error: error })
		}
	}

	handleOpenModal = (item) => {
		this.setState({ modadIsOpen: true })
	}

	handleCloseModal = (item) => {
		this.setState({ modadIsOpen: false })
	}

	handleDeleteBadge = async (item) => {
		this.setState({ loading: true, error: null })
		try {
			api.badges.remove(this.props.match.params)
			this.props.history.push('/badges')
			this.setState({ loading: false })
		} catch (error) {
			this.setState({ loading: false, error: error })
		}
	}

	render() {
		if (this.state.loading) {
			return <Loading />
		}

		const badge = this.state.data

		return (
			<React.Fragment>
				<BadgeHero />
				<div className='container'>
					<div className='row'>
						<div className='col-6'>
							<Badge
								firstName={this.state.data.firstName}
								lastName={this.state.data.lasttName}
								jobTitle={this.state.data.jobTitle}
								twitter={this.state.data.twitter}
								email={this.state.data.email}
							/>
						</div>
						<div className='col-6'>
							<h2>Acciones</h2>
							<Link
								to={`/badge/${this.props.match.params.badgeId}/edit`}
								className='btn btn-primary'>
								Editar
							</Link>
							<br></br>
							<br></br>
							<a onClick={this.handleOpenModal} className='btn btn-danger'>
								Borrar
							</a>
							<DeleteBadgeModal
								onOpen={this.handleOpenModal}
								onClose={this.handleCloseModal}
								modalIsOpren={this.state.modadIsOpen}
								onDeleteBadge={this.handleDeleteBadge}
							/>
						</div>
					</div>
				</div>
			</React.Fragment>
		)
	}
}

export default BadgeDetail
