import React from 'react'
import { Link } from 'react-router-dom'

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
            <li key={item.id}>
              <p>{item.firstName} {item.lastName}</p>
            </li>
          )
        })}
      </ul>
    )
  }
}

export default BadgeList