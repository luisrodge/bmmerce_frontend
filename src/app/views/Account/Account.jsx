import React, { Component } from 'react';

class Account extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userAccount: {},
      avatarImage: ''
    };
  }

  componentDidMount() {
    this.props.getAccount();
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.account !== prevState.userAccount) {
      return { userAccount: nextProps.account };
    }
    else return null;
  }

  handleInput = (event) => {
    const { userAccount } = this.state;
    userAccount[event.target.name] = event.target.value
    this.setState({ userAccount });
  }

  handleAvatarChange = (event) => {
    console.log(event.target.files[0]);
    this.setState({ avatarImage: event.target.files[0] });
  }

  updateAccount = (e) => {
    e.preventDefault();
    console.log(this.state.userAccount);
    this.props.updateAccount(
      this.state.userAccount,
      this.state.avatarImage
    );
  }

  render() {
    if (this.props.gettingAccount) { return null; }
    return (
      <div className="row pb-5">
        <div className="col-md-5 mx-auto">
          <div className="row">
            <div className="col-md-3">
              {this.props.account.avatar &&
                <img src={this.props.account.avatar['url']} alt="" className="img-sm" />
              }
            </div>
            <div className="col-md-9">
              <h3 className="pt-3">Update Your Account</h3>
            </div>
          </div>
          <hr />
          <form onSubmit={this.updateAccount} className="mt-4">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                className="form-control form-control-lg"
                value={this.state.userAccount.name}
                onChange={this.handleInput}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                className="form-control form-control-lg"
                value={this.state.userAccount.email}
                onChange={this.handleInput}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">New Password (Leave blank if not changing)</label>
              <input
                type="password"
                name="passwordDigest"
                className="form-control form-control-lg"
                value={this.state.userAccount.passwordDigest}
                onChange={this.handleInput}
              />
            </div>
            <div className="form-group">
              <label htmlFor="avatar">Profile Picture</label><br />
              <input type="file" onChange={this.handleAvatarChange} />
            </div>
            <br />
            <button
              className="btn btn-green btn-block btn-lg"
              disabled={!this.state.userAccount.email || !this.state.userAccount.name}
            >
              {this.props.updatingAccount ? "Updating..." : "Update"}
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Account;
