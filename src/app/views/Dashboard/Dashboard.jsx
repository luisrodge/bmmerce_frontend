import React, { Component } from 'react';
import Modal from 'react-modal';
import ImageUploader from 'react-images-upload';
import shortid from 'shortid';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: '50%',
    bottom: 'auto',
    marginRight: '-40%',
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
      selectedListing: {},
      pictures: []
    };
  }

  componentDidMount() {
    this.props.getListings();
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
    this.props.updateListing(
      this.state.selectedListing,
      this.state.pictures
    );
    this.setState({
      modalIsOpen: false,
      selectedListing: {},
      pictures: []
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

  onDrop = (pictureFiles, pictureDataURLs) => {
    this.setState({
      pictures: this.state.pictures.concat(pictureFiles)
    });
  }

  render() {
    if (this.props.gettingListings) { return null; }
    return (
      <div className="row">
        <div className="col-md-12 mb-2">
          <h3>Listings</h3>
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
              {this.props.listings.map((listing, index) =>
                <tr key={shortid.generate()} className="pointer" onClick={() => this.openModal(listing)}>
                  <td>
                    <img className="img-sm" src={listing.images[0]['src']} alt="Card image cap" />
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
        {this.state.modalIsOpen &&
          <Modal
            isOpen={this.state.modalIsOpen}
            onRequestClose={this.closeModal}
            style={customStyles}
            shouldCloseOnOverlayClick={true}
            contentLabel="Listing View"
          >
            <div className="row">
              <div className="col-md-4 ml-auto text-right">
                <p className="text-danger pointer" onClick={this.handleDelete}>Delete</p>
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
                {this.state.selectedListing.images.map((image, index) =>
                  <div className="col-md-3" key={index}>
                    <img className="img-fluid mt-3 mb-3" src={image['src']} alt="Listing image" />
                  </div>
                )}
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
              <button className="btn btn-green btn-block">Update Listing</button>
            </form>
          </Modal>
        }
      </div>
    );
  }
}

export default Dashboard;
