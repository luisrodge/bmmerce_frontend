import React from 'react';
import Modal from 'react-modal';
import { Wizard, Steps, Step } from 'react-albus';
import Dropzone from 'react-dropzone';

const customStyles = {
    content: {
        top: '50%',
        left: '50.1%',
        right: '50.1%',
        bottom: 'auto',
        marginRight: '-35.1%',
        transform: 'translate(-50.1%, -50.1%)',
        maxHeight: '100vh', // <-- This sets the height
        overlfow: 'scroll' // <-- This tells the modal to scrol
    },
    overlay: {
        zIndex: 10
    }
};

Modal.setAppElement('#root');

const NewListingModal = (props) => {
    console.log(props.inputValues.pictures);
    return (
        <Modal
            isOpen={props.modalIsOpen}
            style={customStyles}
            shouldCloseOnOverlayClick={false}
            ariaHideApp={true}
        >
            <div className="row">
                <div className="col-md-12">
                    <Wizard>
                        <Steps>
                            <Step
                                id="step-select-type"
                                render={({ next }) => (
                                    <div>
                                        <div className="row">
                                            <div className="col-md-12 text-right">
                                                <i className="fas fa-times pointer" onClick={props.closeModal}></i>
                                            </div>
                                        </div>
                                        <h4 className="text-center mb-1">Choose what you'll be posting.</h4>
                                        <h5 className="mb-5 mt-0 text-center text-muted">Will you be posting something to rent or sell?</h5>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <button onClick={() => { next(); props.onSelectSale() }} className="btn btn-green btn-block btn-lg">Sell</button>
                                            </div>
                                            <div className="col-md-6">
                                                <button onClick={() => { next(); props.onSelectRental() }} className="btn btn-green btn-block btn-lg">Rent</button>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            />
                            <Step
                                id="gandalf"
                                render={({ next, previous }) => (
                                    <div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <i className="fas fa-chevron-left pointer" onClick={previous}></i>
                                            </div>
                                            <div className="col-md-6 text-right">
                                                <i className="fas fa-times pointer" onClick={props.closeModal}></i>
                                            </div>
                                        </div>
                                        <h4 className="text-center mb-0">Upload listing images.</h4>
                                        <h6 className="mb-4 mt-0 text-center text-muted">The upload limit is 10mb</h6>
                                        {props.inputValues.pictures.length > 0 &&
                                            <div className="step-uploaded-images mt-3 mb-4">
                                                {props.inputValues.pictures.map((picture, index) =>
                                                    <div
                                                        className="uploaded-image pointer"
                                                        key={index}
                                                        title="Click to remove"
                                                        onClick={() => props.onRemoveImage(picture)}
                                                    >
                                                        <img src={picture.preview} />
                                                    </div>
                                                )}
                                            </div>
                                        }
                                        <div className="row">
                                            <div className="col-md-12">
                                                <Dropzone className="ignore new-listing-dz pointer" onDrop={props.onDrop}>
                                                    <p className="text-center m-0">Click here or drag & drop images here to upload</p>
                                                </Dropzone>
                                            </div>
                                        </div>
                                        <div className="row mt-4">
                                            <div className="col-md-6 mx-auto">
                                                {props.inputValues.pictures.length > 0 &&
                                                    <button onClick={next} className="btn btn-green btn-block btn-lg">
                                                        Next
                                                    </button>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                )}
                            />
                            <Step
                                id="dumbledore"
                                render={({ next, previous }) => (
                                    <div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <i className="fas fa-chevron-left pointer" onClick={previous}></i>
                                            </div>
                                            <div className="col-md-6 text-right">
                                                <i className="fas fa-times pointer" onClick={props.closeModal}></i>
                                            </div>
                                        </div>
                                        <div className="row mb-3 mt-4" >
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <label htmlFor="title">Title</label>
                                                    <input
                                                        type="text"
                                                        name="title"
                                                        className="form-control"
                                                        value={props.inputValues.title}
                                                        onChange={props.onHandleInput}
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="title">Price</label>
                                                    <input
                                                        type="text"
                                                        name="price"
                                                        className="form-control"
                                                        value={props.inputValues.price}
                                                        onChange={props.onHandleInput}
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="address">Specific Address</label>
                                                    <input
                                                        type="text"
                                                        name="address"
                                                        className="form-control"
                                                        value={props.inputValues.address}
                                                        onChange={props.onHandleInput}
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="description">Description</label>
                                                    <input
                                                        type="text"
                                                        name="description"
                                                        className="form-control"
                                                        value={props.inputValues.description}
                                                        onChange={props.onHandleInput}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6 mx-auto">
                                                <button
                                                    disabled={!props.inputValues.address || !props.inputValues.price || !props.inputValues.title}
                                                    onClick={props.onCreateListing}
                                                    className="btn btn-green btn-block btn-lg"
                                                >
                                                    Post Listing
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            />
                        </Steps>
                    </Wizard>
                </div>
            </div>
        </Modal>
    );
}

export default NewListingModal;
