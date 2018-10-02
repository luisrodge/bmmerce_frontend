import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Footer.scss';

class Footer extends Component {
  render() {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <p className="m-0">&copy; Copyright bmmerce {new Date().getFullYear()}</p>
                        <p className="m-0 p-0">belizecommerce@gmail.com - 501-608-2077</p>
                    </div>
                    <div className="col-md-6 text-right">
                        <p className="m-0">
                            <Link to="/privacy_policy" className="text-muted">
                                Privacy Policy
                            </Link>
                            <Link to="/terms_of_service" className="text-muted pl-4">
                                Terms of Service
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
  }
}

export default Footer;


