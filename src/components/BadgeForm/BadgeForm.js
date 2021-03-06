import React from 'react'

class BadgeForm extends React.Component {

  render() {
    return (
      <div>
        <form onSubmit={this.props.onSubmit}>
          <div className="from-group">
            <label>First Name</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="firstName"
              value={this.props.formValues.firstName}>
            </input>
          </div>
          <div className="from-group">
            <label>Last Name</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="lasttName"
              value={this.props.formValues.lasttName}>
            </input>
          </div>
          <div className="from-group">
            <label>Email</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="email"
              name="email"
              value={this.props.formValues.email}>
            </input>
          </div>
          <div className="from-group">
            <label>Job title</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="jobTitle"
              value={this.props.formValues.jobTitle}>
            </input>
          </div>
          <div className="from-group">
            <label>Twitter</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="twitter"
              value={this.props.formValues.twitter}>
            </input>
          </div>
          <button className="btn btn-primary">Save</button>
        </form>
        {this.props.error && <p className="text-danger">Hay un error</p>}
      </div>
    )
  }
}

export default BadgeForm