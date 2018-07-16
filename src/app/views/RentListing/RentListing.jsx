import React, { Component } from 'react';

class RentListing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            contactNumber: '',
            rentDate: '',
            comment: '',
        }
    }

    componentDidMount() {
        this.props.getListing(this.props.listingId);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createRentRequest({
            ...this.state,
            listingId: this.props.listing.id
        });
    }

    render() {
        if (this.props.gettingListing) { return null; }
        return (
            <div className="row">
                <div className="col-md-6">
                    <h3>Rent {this.props.listing.title}</h3>
                    <div className="notice">
                        <p>We will get back to you either through whatsapp or phone call in about 1 hour.</p>
                    </div>
                    <br />
                    <form onSubmit={e => this.handleSubmit(e)}>
                        <div className="form-group">
                            <label htmlFor="name">You Name</label>
                            <input
                                type="text"
                                name="name"
                                className="form-control"
                                value={this.state.name}
                                onChange={e => this.setState({ name: e.target.value })}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="contactNumber">Contact Number</label>
                            <input
                                type="text"
                                name="contactNumber"
                                className="form-control"
                                value={this.state.contactNumber}
                                onChange={e => this.setState({ contactNumber: e.target.value })}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="rentDate">When Would You Like To Rent This Listing?</label>
                            <input
                                type="date"
                                name="rentDate"
                                className="form-control"
                                value={this.state.rentDate}
                                onChange={e => this.setState({ rentDate: e.target.value })}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="comment">Additional Comments/Details</label>
                            <textarea
                                name="comment"
                                className="form-control"
                                value={this.state.comment}
                                onChange={e => this.setState({ comment: e.target.value })}
                            >
                            </textarea>
                        </div>
                        <br />
                        <button className="btn btn-light btn-block">Send Rent Request</button>
                    </form>
                </div>
                <div className="col-md-4 ml-auto">
                    <img src="https://www.drive.sg/uploads/cars/Subaru-Impreza-5DR-idealrentalcar-2747-main.png" alt="" className="img-fluid" />
                </div>
            </div>
        );
    }
}

export default RentListing;
