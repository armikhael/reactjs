import React from 'react'
import { Link } from 'react-router-dom'

import BadgeList from '../../components/BadgeList/BadgeList'
import BadgeHero from '../../components/BadgeHero/BadgeHero'
import Loading from '../../components/Loading/Loading'
import PageError from '../../components/PageError/PageError'
import api from '../../api'

import './Badges.css'

class Badges extends React.Component {
  state = {
    loading: true,
    error: null,
    data: undefined
  }

  componentDidMount() {
    console.log("3. componentDidMount");
    this.fetchData();
  }

  fetchData = async () => {
    this.setState({
      loading: true,
      error: null
    })
    try {
      const data = await api.badges.list();
      this.setState({
        loading: false,
        data: data
      })

    } catch (error) {
      this.setState({
        loading: false,
        error: true
      })
    }
  }

  render() {
    if (this.state.loading == true) {
      return <Loading />;
    }
    if (this.state.error) {
      return <PageError error={this.state.error} />
    }
    console.log("2. render");
    return (
      <React.Fragment>
        <BadgeHero />
        <div className="Badges__container">
          <div className="Badges__buttons">
            <Link className="btn btn-primary" to="/badge/new">
              New Badge
            </Link>
          </div>
          <div className="Badges__list">
            <div className="Badges__container">
              <BadgeList badgeList={this.state.data} />
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Badges;