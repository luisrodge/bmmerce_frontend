import React, { Component } from 'react';
import ImageUploader from 'react-images-upload';

class NewListing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            price: '',
            address: '',
            priceDetails: '',
            description: '',
            pictures: []
        }
        this.onDrop = this.onDrop.bind(this);
    }

    onDrop(pictureFiles, pictureDataURLs) {
        console.log(pictureFiles);
        this.setState({
            pictures: this.state.pictures.concat(pictureFiles)
        });
        console.log('Picture', this.state.pictures);
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
            <div className="row">
                <div className="col-md-5 mx-auto">
                    <h4 className="text-center">Add A New Rental Listing</h4>
                    <br />
                    <form onSubmit={e => this.handleSubmit(e)}>
                        <div className="form-group">
                            <label htmlFor="title">*Title</label>
                            <input
                                type="text"
                                name="title"
                                className="form-control"
                                value={this.state.title}
                                onChange={e => this.setState({ title: e.target.value })}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="title">*Price</label>
                            <input
                                type="text"
                                name="price"
                                className="form-control"
                                value={this.state.price}
                                onChange={e => this.setState({ price: e.target.value })}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="price-details">Additional Pricing Details</label>
                            <textarea
                                name="price-details"
                                className="form-control"
                                value={this.state.priceDetails}
                                onChange={e => this.setState({ priceDetails: e.target.value })}
                            >
                            </textarea>
                        </div>
                        <div className="form-group">
                            <label htmlFor="title">Address</label>
                            <input
                                type="text"
                                name="address"
                                className="form-control"
                                value={this.state.address}
                                onChange={e => this.setState({ address: e.target.value })}
                            />
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
                        <div className="form-group">
                            <label htmlFor="images" className="m-0">*Images</label><br />
                            <ImageUploader
                                withIcon={true}
                                buttonText='Choose Images'
                                onChange={this.onDrop}
                                imgExtension={['.jpg', '.jpeg', '.gif', '.png', '.gif']}
                                maxFileSize={5242880}
                                withPreview={true}
                                className="image-uploader"
                            />
                        </div>
                        <br />
                        <button className="btn btn-light btn-block">Create Listing</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default NewListing;
