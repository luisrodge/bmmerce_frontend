import React, { Component } from 'react';

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.authenticate(
            this.state.email, 
            this.state.password,
        );
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-5 mx-auto">
                    <h4 className="text-center">Sign In To Post A Listing</h4>
                    <br/>
                    <form onSubmit={e => this.handleSubmit(e)}>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input 
                                type="email" 
                                className="form-control"
                                value={this.state.email}
                                onChange={e => this.setState({ email: e.target.value })}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input 
                                type="password" 
                                className="form-control"
                                value={this.state.password}
                                onChange={e => this.setState({ password: e.target.value })}
                            />
                        </div>
                        <br/>
                        <button className="btn btn-light btn-block">Sign In</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default SignIn;
