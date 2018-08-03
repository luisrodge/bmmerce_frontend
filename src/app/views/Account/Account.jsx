import React, { Component } from 'react';

class Account extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userAccount: {},
      businessAccount: {},
      avatarImage: '',
      logo: '',
      coverImage: ''
    };
  }

  componentDidMount() {
    if (this.props.authType === 'business') {
      this.props.getBusiness();
    } else {
      this.props.getAccount();
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.account !== prevState.userAccount) {
      return { userAccount: nextProps.account };
    } else if (nextProps.business !== prevState.businessAccount) {
      return { businessAccount: nextProps.business };
    }
    else return null;
  }

  handleInput = (event) => {
    const { userAccount } = this.state;
    userAccount[event.target.name] = event.target.value
    this.setState({ userAccount });
  }

  handleBusinessInput = (event) => {
    const { businessAccount } = this.state;
    businessAccount[event.target.name] = event.target.value
    this.setState({ businessAccount });
  }

  handleImageChange = (event) => {
    console.log(event.target.files[0]);
    this.setState({ [event.target.name]: event.target.files[0] });
  }

  updateAccount = (e) => {
    e.preventDefault();
    this.props.updateAccount(
      this.state.userAccount,
      this.state.avatarImage
    );
  }

  updateBusinessAccount = (e) => {
    e.preventDefault();
    this.props.updateBusiness(
      this.state.businessAccount,
      this.state.logo,
      this.state.coverImage
    );
  }

  render() {
    if (this.props.gettingAccount || this.props.gettingBusiness) { return null; }
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
              <h3 className="pt-3">Update Account</h3>
            </div>
          </div>
          <hr />
          {this.props.authType !== 'business' ? (
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
                <label htmlFor="avatarImage">Profile Picture</label><br />
                <input type="file" name="avatarImage" onChange={this.handleImageChange} />
              </div>
              <br />
              <button
                className="btn btn-green btn-block btn-lg"
                disabled={!this.state.userAccount.email || !this.state.userAccount.name}
              >
                {this.props.updatingAccount ? "Updating..." : "Update"}
              </button>
            </form>
          ) : (
              <form onSubmit={this.updateBusinessAccount} className="mt-4">
                <div className="row mb-4">
                  {this.props.business.logo &&
                  <div className="col-md-3">
                    <p className="text-center mb-0">Logo</p>
                    <img src={this.props.business.logo.url} className="img-sm-fh"/>
                  </div>
                  }
                  {this.props.business.coverImage &&
                  <div className="col-md-3">
                    <p className="text-center mb-0">Cover Photo</p>
                    <img src={this.props.business.coverImage.url} className="img-sm-fh"/>
                  </div>
                  }
                </div>
                <div className="form-group">
                  <label htmlFor="name">Business Name</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control form-control-lg"
                    value={this.state.businessAccount.name}
                    onChange={this.handleBusinessInput}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Address</label>
                  <input
                    type="text"
                    name="address"
                    className="form-control form-control-lg"
                    value={this.state.businessAccount.address}
                    onChange={this.handleBusinessInput}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="coverImage">Logo</label><br />
                  <input type="file" name="logo" onChange={this.handleImageChange} className="form-control form-control-lg" />
                </div>
                <div className="form-group">
                  <label htmlFor="coverImage">Cover Photo</label><br />
                  <input type="file" name="coverImage" onChange={this.handleImageChange} className="form-control form-control-lg" />
                </div>
                <br />
                <button
                  className="btn btn-green btn-block btn-lg"
                  disabled={!this.state.businessAccount.name}
                >
                  {this.props.updatingBusiness ? "Updating..." : "Update"}
                </button>
              </form>
            )}
        </div>
      </div>
    );
  }
}

export default Account;
