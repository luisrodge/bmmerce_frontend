import React, { Component } from 'react';
import { Wizard, Steps, Step } from 'react-albus';

import { Modal } from '../../components';

const intitalState = {
    name: '',
    email: '',
    password: '',
}

class AuthModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
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
        this.props.authenticate(this.state.email, this.state.password);
    }

    register = (e) => {
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
                            render={({ next }) => (
                                <div>
                                    <h3 className="text-center">Sign In To Start Posting</h3>
                                    <p className="text-center text-muted">We are Belize's premier platform on which producers and consumers can easily engage in business</p>
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
                                                    disabled={this.props.authenticating}
                                                >
                                                    {this.props.authenticating ? "Signing You In..." : "Sign In"}
                                                </button>
                                                <div className="mt-4 text-center">
                                                    <h5>New to belizers? <span className="link-green text-center pointer" onClick={next}>Sign up</span> today!</h5>
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
                                    <h1>Gandalf</h1>
                                    <button onClick={next}>Next</button>
                                    <button onClick={previous}>Previous</button>
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
