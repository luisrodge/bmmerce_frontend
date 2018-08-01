import React, { Component } from 'react';
import { Wizard, Steps, Step } from 'react-albus';

import { Modal } from '../../components';

const intitalState = {
    name: '',
    email: '',
    username: '',
    password: '',
}

class AuthModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            businessSignIn: false
        }
    }

    closeModal = () => {
        this.props.closeAuthModal();
        this.setState(intitalState);
    }

    handleInput = (evt) => {
        this.setState({ [evt.target.name]: evt.target.value });
    }

    login = (e) => {
        e.preventDefault();
        this.props.authenticate(
            this.state.email,
            this.state.username,
            this.state.password,
            this.state.businessSignIn
        );
    }

    register = (e) => {
        e.preventDefault();
        this.props.register(
            this.state.name,
            this.state.email,
            this.state.password
        );
    }

    render() {
        return (
            <Modal
                isOpen={this.props.modalIsOpen}
                closeOnOverlayClick={true}
                onRequestClose={this.closeModal}
            >
                <Wizard>
                    <Steps>
                        <Step
                            id="signin"
                            render={({ next, push }) => (
                                <div>
                                    <h3 className="text-center mb-0">Sign In To Start Posting</h3>
                                    <p className="text-center text-muted">We are Belize's premier platform for consumer to consumer and business to consumer commerce.</p>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <form onSubmit={e => this.login(e)}>
                                                <div className="form-group">
                                                    <label htmlFor="email">Email</label>
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        className="form-control form-control-lg"
                                                        value={this.state.email}
                                                        onChange={this.handleInput}
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="password">Password</label>
                                                    <input
                                                        type="password"
                                                        name="password"
                                                        className="form-control form-control-lg"
                                                        value={this.state.password}
                                                        onChange={this.handleInput}
                                                    />
                                                </div>
                                                <br />
                                                <button
                                                    className="btn btn-green btn-block btn-lg"
                                                    disabled={this.props.authenticating || !this.state.email || !this.state.password}
                                                >
                                                    {this.props.authenticating ? "Signing You In..." : "Sign In"}
                                                </button>
                                                <div className="mt-4 text-center">
                                                    <h5>New to belizers? <span className="link-green text-center pointer" onClick={next}>Sign up</span> today!</h5>
                                                </div>
                                                <div className="mt-2 text-center">
                                                    <h5><span className="link-green text-center pointer" onClick={() => { this.setState({ businessSignIn: true }); push('business-signin') }}>Business Portal</span></h5>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            )}
                        />
                        <Step
                            id="register"
                            render={({ next, previous }) => (
                                <div>
                                    <h3 className="text-center mb-0">Create Your Account</h3>
                                    <p className="text-center text-muted">You'll never go back to the old ways of buying & selling in Belize!</p>
                                    <div className="row mt-4">
                                        <div className="col-md-12">
                                            <form onSubmit={e => this.register(e)}>
                                                <div className="form-group">
                                                    <label htmlFor="email">Full Name</label>
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        className="form-control form-control-lg"
                                                        value={this.state.name}
                                                        onChange={this.handleInput}
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="email">Email</label>
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        className="form-control form-control-lg"
                                                        value={this.state.email}
                                                        onChange={this.handleInput}
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="password">Password</label>
                                                    <input
                                                        type="password"
                                                        name="password"
                                                        className="form-control form-control-lg"
                                                        value={this.state.password}
                                                        onChange={this.handleInput}
                                                    />
                                                </div>
                                                <br />
                                                <button
                                                    className="btn btn-green btn-block btn-lg"
                                                    disabled={this.props.registering || !this.state.name || !this.state.email || !this.state.password}
                                                >
                                                    {this.props.registering ? "Creating account..." : "Create Account"}
                                                </button>
                                                <div className="mt-4 text-center">
                                                    <h5>Or <span className="link-green text-center pointer" onClick={previous}>Sign In</span></h5>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            )}
                        />
                        <Step
                            id="business-signin"
                            render={({ next, push }) => (
                                <div>
                                    <h3 className="text-center mb-3">Business Portal Sign In</h3>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <form onSubmit={(e) => { this.setState({ businessSignIn: true }); this.login(e) }}>
                                                <div className="form-group">
                                                    <label htmlFor="username">Username</label>
                                                    <input
                                                        type="text"
                                                        name="username"
                                                        className="form-control form-control-lg"
                                                        value={this.state.username}
                                                        onChange={this.handleInput}
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="password">Password</label>
                                                    <input
                                                        type="password"
                                                        name="password"
                                                        className="form-control form-control-lg"
                                                        value={this.state.password}
                                                        onChange={this.handleInput}
                                                    />
                                                </div>
                                                <br />
                                                <button
                                                    className="btn btn-green btn-block btn-lg"
                                                    disabled={this.props.authenticating || !this.state.username || !this.state.password}
                                                >
                                                    {this.props.authenticating ? "Signing You In..." : "Sign In"}
                                                </button>
                                                <div className="mt-4 text-center">
                                                    <h5><span className="link-green text-center pointer" onClick={() => { this.setState({ businessSignIn: false }); push('signin') }}>Regular Sign In</span></h5>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            )}
                        />
                    </Steps>
                </Wizard>
            </Modal>
        )
    }
}

export default AuthModal;
