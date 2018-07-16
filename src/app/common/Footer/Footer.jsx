import React, { Component } from 'react';
import './Footer.scss';

class Footer extends Component {
  render() {
    return (
        <footer className="mt-5">
            <div className="container">
                <p className="text-muted m-0 text-center">&copy; Copyright belizerentify 2018</p>
            </div>
        </footer>
    );
  }
}

export default Footer;


