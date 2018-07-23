import React, { Component } from 'react';
import ImageUploader from 'react-images-upload';

class NewListing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            price: '',
            address: '',
            description: '',
            isRental: false,
            contactNumber: '',
            contactEmail: '',
            contactName: '',
            emailFlag: true,
            phoneCallFlag: true,
            smsFlag: true,
            whatsappFlag: true,
            pictures: []
        }
        this.onDrop = this.onDrop.bind(this);
    }

    onDrop(pictureFiles, pictureDataURLs) {
        this.setState({
            pictures: this.state.pictures.concat(pictureFiles)
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createListing({
            ...this.state,
            userId: this.props.userId
        });
    }

    render() {
        return (
            <div>
                <h3 className="text-center mb-0">Add A New Listing</h3>
                <p className="text-center">Note: Your listing will be active on this site for 20 days</p>
                <hr />
                <form onSubmit={e => this.handleSubmit(e)} className="mt-5">
                    <div className="row">
                        <div className="col-md-4">
                            <h4>Listing Details</h4>
                            <hr />
                            <div className="form-group">
                                <input type="checkbox" name="cb-is-rental" checked={this.state.isRental} onChange={e => this.setState({ isRental: e.target.checked })} /> 
                                <label className="pl-1 mb-0">Is this a rental listing?</label> 
                            </div>
                            <div className="form-group">
                                <label htmlFor="title">Title</label>
                                <input
                                    type="text"
                                    name="title"
                                    className={`form-control required ${this.props.createListingErrors.title ? 'validation-error' : ''}`}
                                    value={this.state.title}
                                    onChange={e => this.setState({ title: e.target.value })}
                                />
                                {this.props.createListingErrors.title &&
                                    <p className="text-danger">{this.props.createListingErrors.title[0]}</p>
                                }
                            </div>
                            <div className="form-group">
                                <label htmlFor="address">Specific Address</label>
                                <input
                                    type="text"
                                    name="address"
                                    className={`form-control required ${this.props.createListingErrors.address ? 'validation-error' : ''}`}
                                    value={this.state.address}
                                    onChange={e => this.setState({ address: e.target.value })}
                                />
                                {this.props.createListingErrors.address &&
                                    <p className="text-danger">{this.props.createListingErrors.address[0]}</p>
                                }
                            </div>
                            <div className="form-group">
                                <label htmlFor="title">Price</label>
                                <input
                                    type="text"
                                    name="price"
                                    className={`form-control required ${this.props.createListingErrors.price ? 'validation-error' : ''}`}
                                    value={this.state.price}
                                    onChange={e => this.setState({ price: e.target.value })}
                                />
                                {this.props.createListingErrors.price &&
                                    this.props.createListingErrors.price.map((error, index) =>
                                        <p key={index} className="m-0 text-danger">{error}</p>
                                    )
                                }
                            </div>
                            <div className="form-group">
                                <label htmlFor="description">Description</label>
                                <textarea
                                    name="description"
                                    className="form-control"
                                    value={this.state.description}
                                    onChange={e => this.setState({ description: e.target.value })}
                                >
                                </textarea>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <h4>Contact Information</h4>
                            <hr />
                            <div className="form-group">
                                <label htmlFor="name">Contact Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    className={`form-control required ${this.props.createListingErrors.contact_name ? 'validation-error' : ''}`}
                                    value={this.state.contactName}
                                    onChange={e => this.setState({ contactName: e.target.value })}
                                />
                                {this.props.createListingErrors.contact_name &&
                                    <p className="text-danger">{this.props.createListingErrors.contact_name[0]}</p>
                                }
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    className={`form-control required ${this.props.createListingErrors.contact_email ? 'validation-error' : ''}`}
                                    value={this.state.contactEmail}
                                    onChange={e => this.setState({ contactEmail: e.target.value })}
                                />
                                {this.props.createListingErrors.contact_email &&
                                    <p className="text-danger">{this.props.createListingErrors.contact_email[0]}</p>
                                }
                            </div>
                            <div className="form-group">
                                <label htmlFor="contact-number">Contact Number</label>
                                <input
                                    type="text"
                                    name="contact-number"
                                    className={`form-control required ${this.props.createListingErrors.contact_number ? 'validation-error' : ''}`}
                                    value={this.state.contactNumber}
                                    onChange={e => this.setState({ contactNumber: e.target.value })}
                                />
                                {this.props.createListingErrors.contact_number &&
                                    <p className="text-danger">{this.props.createListingErrors.contact_number[0]}</p>
                                }
                            </div>
                            <div className="form-group">
                                <label>Interested customers can reach me via:</label>
                                <br />
                                <input type="checkbox" name="cb-email" checked={this.state.emailFlag} onChange={e => this.setState({ emailFlag: e.target.checked })} /> Email
                                <input type="checkbox" name="cb-phone-call" className="ml-3" checked={this.state.phoneCallFlag} onChange={e => this.setState({ phoneCallFlag: e.target.checked })} /> Phone Call
                                <input type="checkbox" name="cb-text-message" className="ml-3" checked={this.state.smsFlag} onChange={e => this.setState({ smsFlag: e.target.checked })} /> SMS
                                <input type="checkbox" name="cb-whats-app" className="ml-3" checked={this.state.whatsappFlag} onChange={e => this.setState({ whatsappFlag: e.target.checked })} /> WhatsApp
                            </div>
                        </div>
                        <div className="col-md-4">
                            <h4>Listing Images</h4>
                            <hr />
                            <div className="form-group">
                                <label htmlFor="images" className="m-0">Images</label><br />
                                <ImageUploader
                                    withIcon={true}
                                    buttonText='Choose Images'
                                    onChange={this.onDrop}
                                    imgExtension={['.jpg', '.jpeg', '.gif', '.png', '.gif']}
                                    maxFileSize={5242880}
                                    withPreview={true}
                                    className="image-uploader image-uploader-required"
                                />
                            </div>
                        </div>
                    </div>

                    <br />
                    <button className="btn btn-light btn-lg btn-block" disabled={this.props.creatingListing}>
                        {this.props.creatingListing ? "Posting Listing..." : "Create Listing"}
                    </button>
                </form>
            </div>
        );
    }
}

export default NewListing;
