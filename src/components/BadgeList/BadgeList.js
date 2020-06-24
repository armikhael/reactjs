import React from 'react'

class BadgeList extends React.Component {
  render() {
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