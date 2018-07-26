import React, { Component } from 'react';

import NewListingModal from './NewListingModal';
import './NewListing.scss'

const intitalState = {
    title: '',
    price: '',
    address: '',
    description: '',
    isRental: false,
    contactNumber: '',
    contactEmail: '',
    pictures: [],
}

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
            pictures: [],
        }
    }

    onDrop = (pictures) => {
        console.log(pictures);
        this.setState({
            pictures: this.state.pictures.concat(pictures),
        });
    }

    createListing = (e) => {
        e.preventDefault();
        this.props.createListing({
            ...this.state,
            userId: this.props.userId
        });
        this.props.closeModal();
        this.setState(intitalState);
    }

    closeModal = () => {
        console.log("Close");
        this.props.closeModal();
        this.setState(intitalState);
    }

    handleInput = (evt) => {
        console.log(this.state.pictures)
        this.setState({ [evt.target.name]: evt.target.value });
    }

    selectRental = () => { console.log("sdsdsdsd"); this.setState({ isRental: true }) };
    selectSale = () => this.setState({ isRental: false });

    // Remove image and image preview data url
    removeImage = (picture) => {
        let picturesArray = this.state.pictures.filter(pic => pic !== picture);
        this.setState({ pictures: picturesArray });
    }

    render() {
        return (
            <NewListingModal
                closeModal={this.closeModal}
                modalIsOpen={this.props.modalIsOpen}
                onDrop={this.onDrop}
                onHandleInput={this.handleInput}
                onRemoveImage={this.removeImage}
                onCreateListing={this.createListing}
                inputValues={{ ...this.state }}
                onSelectRental={this.selectRental}
                onSelectSale={this.selectSale}
            />
        )
    }
}

export default NewListing;
