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
                firstName={this.state.form.firstName}
                lastName={this.state.form.lasttName}
                jobTitle={this.state.form.jobTitle}
                twitter={this.state.form.twitter}
                email={this.state.form.email}
                avatar="https://scontent.fscl18-1.fna.fbcdn.net/v/t1.0-9/1522066_609878235727438_1321906128_n.jpg?_nc_cat=109&_nc_sid=09cbfe&_nc_ohc=RwFpEKKjkswAX8O9DRA&_nc_ht=scontent.fscl18-1.fna&oh=59c989c8ae65a68db0fa476e4d28d607&oe=5F16CB42"
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