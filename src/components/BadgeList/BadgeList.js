import React from 'react'
import { Link } from 'react-router-dom'
import Gravatar from '../Gravatar/Gravatar'

class BadgeList extends React.Component {
  render() {
    if (this.props.badgeList.length == 0) {
      return (
        <div>
          <h3>No se encontraron resultados</h3>
          <Link className="btn btn-primary" to="/badge/new">
            Create new badge
          </Link>
        </div>
      )
    }
    return (
      <ul className="list-unstyled">
        {this.props.badgeList.map((item) => {
          return (
            <Link
              className="text-reset text-decoration-none"
              to={`/badge/${item.id}/edit`}>
              <li key={item.id}>
                <Gravatar email={item.email} />
                <p>{item.firstName} {item.lastName}</p>
                <a>@ {item.twitter}</a>
              </li>
            </Link>
          )
        })}
      </ul>
    )
  }
}

export default BadgeList