/** @format */

import React from 'react'
import Modal from '../Modal/Modal'

function DeleteBadgeModal(props) {
	return (
		<Modal
			isOpen={props.isOpen}
			onClose={props.onClose}
			modalIsOpren={props.modalIsOpren}>
			<div className='DeleteBadgeModal'>
				<h1>Mensaje</h1>
				<p>Estas seguro de querer borrarlo?</p>
				<div className=''>
					<button onClick={props.onDeleteBadge} className='btn btn-danger mr-4'>
						Delete
					</button>
					<button onClick={props.onClose} className='btn btn-primary'>
						Cancel
					</button>
				</div>
			</div>
		</Modal>
	)
}

export default DeleteBadgeModal
