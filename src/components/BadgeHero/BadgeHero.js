import React from 'react'

import confLogo from '../../images/badge-header.svg'
import './BadgeHero.css'

class BadgeHero extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img className="Badges_conf-logo" src={confLogo} alt="Conf Logo" />
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default BadgeHero;