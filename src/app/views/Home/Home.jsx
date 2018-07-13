import React, { Component } from 'react';
import Modal from 'react-modal';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : '50%',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    maxHeight:'100vh', // <-- This sets the height
    overlfow: 'scroll' // <-- This tells the modal to scrol
  },
  overlay: {
    zIndex: 10
  }
};

Modal.setAppElement('#root');

class Home extends Component {
  constructor() {
    super();
    this.state = {
      modalIsOpen: false,
    };
  }

  closeModal = () => {
    this.setState({modalIsOpen: false});
  }

  openModal = () => {
    this.setState({modalIsOpen: true});
  }

  render() {
    return (
      <div>
          <div className="row">
            <div className="col-md-12">
              <h4 className="pb-3">Featured Rentals</h4>
            </div>
            <div className="col-md-3">
              <div className="card" onClick={() => this.openModal()}>
                <img class="img-fh" src="https://www.drive.sg/uploads/cars/Subaru-Impreza-5DR-idealrentalcar-2747-main.png" alt="Card image cap"/>
                <div className="card-body">
                  <h5 class="card-title">Subaru model 2009</h5>
                  <p className="card-text">Some quick example text to build on the card title.</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img class="img-fh" src="https://www.drive.sg/uploads/cars/Subaru-Impreza-5DR-idealrentalcar-2747-main.png" alt="Card image cap"/>
                <div className="card-body">
                  <h5 class="card-title">Subaru model 2009</h5>
                  <p className="card-text">Some quick example text to build on the card title.</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img class="img-fh" src="https://www.drive.sg/uploads/cars/Subaru-Impreza-5DR-idealrentalcar-2747-main.png" alt="Card image cap"/>
                <div className="card-body">
                  <h5 class="card-title">Subaru model 2009</h5>
                  <p className="card-text">Some quick example text to build on the card title.</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img class="img-fh" src="https://www.drive.sg/uploads/cars/Subaru-Impreza-5DR-idealrentalcar-2747-main.png" alt="Card image cap"/>
                <div className="card-body">
                  <h5 class="card-title">Subaru model 2009</h5>
                  <p className="card-text">Some quick example text to build on the card title.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-12">
              <h4 className="pb-3">Latest Rentals</h4>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img class="img-fh" src="https://www.drive.sg/uploads/cars/Subaru-Impreza-5DR-idealrentalcar-2747-main.png" alt="Card image cap"/>
                <div className="card-body">
                  <h5 class="card-title">Subaru model 2009</h5>
                  <p className="card-text">Some quick example text to build on the card title.</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img class="img-fh" src="https://www.drive.sg/uploads/cars/Subaru-Impreza-5DR-idealrentalcar-2747-main.png" alt="Card image cap"/>
                <div className="card-body">
                  <h5 class="card-title">Subaru model 2009</h5>
                  <p className="card-text">Some quick example text to build on the card title.</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img class="img-fh" src="https://www.drive.sg/uploads/cars/Subaru-Impreza-5DR-idealrentalcar-2747-main.png" alt="Card image cap"/>
                <div className="card-body">
                  <h5 class="card-title">Subaru model 2009</h5>
                  <p className="card-text">Some quick example text to build on the card title.</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img class="img-fh" src="https://www.drive.sg/uploads/cars/Subaru-Impreza-5DR-idealrentalcar-2747-main.png" alt="Card image cap"/>
                <div className="card-body">
                  <h5 class="card-title">Subaru model 2009</h5>
                  <p className="card-text">Some quick example text to build on the card title.</p>
                </div>
              </div>
            </div>
          </div>
          <Modal
            isOpen={this.state.modalIsOpen}
            onRequestClose={this.closeModal}
            style={customStyles}
            shouldCloseOnOverlayClick={true}
            contentLabel="Listing View"
          >
            <div className="row">
              <div className="col-md-6">
                <h4 className="m-0">Subaru model 2009</h4>
                <p className="text-muted">#2 Bishop St, San Ignacio, Cayo</p>
              </div>
              <div className="col-md-6 text-right">
                <h5 className="text-success m-0">$56 per day</h5>
                <p className="text-muted">Listed by Cayo Rentals</p>
              </div>
            </div>
            
            <img class="img-fluid mt-3 mb-3" src="https://www.drive.sg/uploads/cars/Subaru-Impreza-5DR-idealrentalcar-2747-main.png" alt="Card image cap"/>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, fugiat dolores, inventore hic quaerat blanditiis cumque consequatur natus eveniet 
              qui praesentium sunt! Voluptate cupiditate quidem dolores perferendis culpa vero suscipit?</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, fugiat dolores, inventore hic quaerat blanditiis cumque consequatur natus eveniet 
              qui praesentium sunt! Voluptate cupiditate quidem dolores perferendis culpa vero suscipit?</p>
            <button onClick={this.closeModal} className="btn btn-default btn-block">Rent</button>
          </Modal>
      </div>
    );
  }
}

export default Home;
