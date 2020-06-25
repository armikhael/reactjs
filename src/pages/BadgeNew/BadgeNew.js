import React from 'react';

import Badge from '../../components/Badge/Badge'
import BadgeForm from '../../components/BadgeForm/BadgeForm'

import header from '../../images/badge-header.svg'
import './BadgeNew.css'

class BadgeNew extends React.Component {

  state = {
    form: {
      firstName: '',
      lasttName: '',
      email: '',
      jobTitle: '',
      twitter: ''
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
    return (
      <React.Fragment>
        <div className="BadgeNew__hero">
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
              <BadgeForm
                onChange={this.handleChange}
                formValues={this.state.form} />
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default BadgeNew;