import React from 'react';

import Badge from '../../components/Badge/Badge'
import BadgeForm from '../../components/BadgeForm/BadgeForm'
import Loading from '../../components/Loading/Loading'

import api from '../../api'

import header from '../../images/badge-header.svg'
import './BadgeEdit.css'

class BadgeEdit extends React.Component {

  state = {
    loading: true,
    error: null,
    form: {
      firstName: '',
      lasttName: '',
      email: '',
      jobTitle: '',
      twitter: ''
    }
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData = async item => {
    this.setState({ loading: true, error: null })
    try {
      const data = await api.badges.read(
        this.props.match.params.badgeId
      )
      this.setState({
        loading: false,
        form: data
      })
    } catch (error) {
      this.setState({ loading: false, error: error })
    }
  }

  handleSubmit = async item => {
    item.preventDefault()
    this.setState({ loading: true, error: null })
    try {
      await api.badges.update(this.props.match.params.badgeId, this.state.form)
      this.setState({ loading: false })
      this.props.history.push('/badges')
    } catch (error) {
      console.log("Error");
      this.setState({
        loading: false, error: true
      })
    }
  }

  handleChange = item => {
    this.setState({
      form: {
        ... this.state.form,
        [item.target.name]: item.target.value,
      }
    })
  }

  render() {
    if (this.state.loading) {
      return (
        <Loading />
      )
    }
    return (
      <React.Fragment>
        <div className="BadgeEdit__hero">
          <img className="img-fluid" src={header} alt="header" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName={this.state.form.firstName || 'First Name'}
                lastName={this.state.form.lasttName || 'Last Name'}
                jobTitle={this.state.form.jobTitle || 'Job Title'}
                twitter={this.state.form.twitter || 'Twitter'}
                email={this.state.form.email || 'email@example.com'}
                avatar="https://s.gravatar.com/avatar/01ed1978a6897f5828095561dbaebd3e?s=80"
              />
            </div>
            <div className="col-6">
              <h1>Edit Attendant</h1>
              <BadgeForm
                onSubmit={this.handleSubmit}
                onChange={this.handleChange}
                formValues={this.state.form}
                error={this.state.error} />
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default BadgeEdit;