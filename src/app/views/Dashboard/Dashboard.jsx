import React, { Component } from 'react';
import Modal from 'react-modal';
import ImageUploader from 'react-images-upload';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: '50%',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    maxHeight: '100vh', // <-- This sets the height
    overlfow: 'scroll' // <-- This tells the modal to scrol
  },
  overlay: {
    zIndex: 10
  }
};

Modal.setAppElement('#root');

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      modalIsOpen: false,
      selectedListing: {}
    };
  }

  componentDidMount() {
    this.props.getUserListings(this.props.userId);
  }

  closeModal = () => {
    this.setState({
      modalIsOpen: false,
      selectedListing: {}
    });
  }

  openModal = (listing) => {
    this.setState({
      modalIsOpen: true,
      selectedListing: listing
    });
  }

  handleChangeFor = (propertyName) => (event) => {
    const { selectedListing } = this.state;
    const updatedListing = {
      ...selectedListing,
      [propertyName]: event.target.value
    };
    this.setState({ selectedListing: updatedListing });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state.selectedListing);
    this.props.updateListing(this.state.selectedListing);
    this.setState({
      modalIsOpen: false,
      selectedListing: {}
    });
  }

  handleDelete = () => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className='custom-confirm-alert'>
            <h3 className="text-center">Are you sure?</h3>
            <p>Do you really want to delete this listing?</p>
            <div className="row">
              <div className="col-md-6">
                <button className="btn btn-danger btn-block" onClick={() => {
                  this.props.deleteListing(this.state.selectedListing.id)
                  onClose()
                  this.setState({
                    modalIsOpen: false,
                    selectedListing: {}
                  });
                }}>Yes, Delete it!</button>
              </div>
              <div className="col-md-6">
                <button onClick={onClose} className="btn btn-light btn-block">No</button>
              </div>
            </div>
          </div>
        )
      }
    })
  };

  render() {
    if (this.props.gettingUserListings) { return null; }
    return (
      <div className="row">
        <div className="col-md-12 mb-3">
          <h3>Your Listings</h3>
        </div>
        <div className="col-md-12">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th></th>
                <th scope="col">Title</th>
                <th scope="col">Price</th>
                <th scope="col">Address</th>
                <th scope="col">Description</th>
              </tr>
            </thead>
            <tbody>
              {this.props.userListings.map((listing, index) =>
                <tr key={index} className="pointer" onClick={() => this.openModal(listing)}>
                  <td>
                    <img className="img-sm" src={listing.images[0]['listing_image']['url']} alt="Card image cap" />
                  </td>
                  <td>{listing.title}</td>
                  <td className="text-success">${listing.price}</td>
                  <td>{listing.address}</td>
                  <td>{listing.description}</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          shouldCloseOnOverlayClick={true}
          contentLabel="Listing View"
        >
          <div className="row">
            <div className="col-md-4 ml-auto text-right">
              <p className="text-muted pointer" onClick={this.handleDelete}>Delete</p>
            </div>
          </div>
          <form onSubmit={e => this.handleSubmit(e)}>
            <div className="form-group">
              <label htmlFor="title">*Title</label>
              <input
                type="text"
                name="title"
                className="form-control"
                onChange={this.handleChangeFor('title')}
                value={this.state.selectedListing.title}
              />
            </div>
            <div className="form-group">
              <label htmlFor="title">*Price</label>
              <input
                type="text"
                name="price"
                className="form-control"
                onChange={this.handleChangeFor('price')}
                value={this.state.selectedListing.price}
              />
            </div>
            <div className="form-group">
              <label htmlFor="price-details">Additional Pricing Details</label>
              <textarea
                name="price-details"
                className="form-control"
                onChange={this.handleChangeFor('priceDetails')}
                value={this.state.selectedListing.priceDetails}
              >
              </textarea>
            </div>
            <div className="form-group">
              <label htmlFor="title">Address</label>
              <input
                type="text"
                name="address"
                className="form-control"
                onChange={this.handleChangeFor('address')}
                value={this.state.selectedListing.address}
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                name="description"
                className="form-control"
                onChange={this.handleChangeFor('description')}
                value={this.state.selectedListing.description}
              >
              </textarea>
            </div>
            <div className="row">
              <div className="col-md-12">
                <p className="m-0">*Images</p>
              </div>
              <div className="col-md-3">
                <img className="img-fluid mt-3 mb-3" src="https://www.drive.sg/uploads/cars/Subaru-Impreza-5DR-idealrentalcar-2747-main.png" alt="Card image cap" />
              </div>
            </div>
            <div className="form-group">
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
            <button className="btn btn-light btn-block">Update Listing</button>
          </form>
        </Modal>
      </div>
    );
  }
}

export default Dashboard;
