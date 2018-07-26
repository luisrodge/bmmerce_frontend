import React from 'react';
import { Header, Footer } from '../common';

import { NewListing } from '../common'
import NewListingContainer from '../common/NewListing';

const DefaultLayout = ({ children }) => (                       
    <div className="default-layout">
      <Header />
      <div className="container">
        {children}    
      </div>
      <NewListing />    
      <Footer />                                  
    </div>           
); 

export default DefaultLayout;