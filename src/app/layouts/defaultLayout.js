import React from 'react';
import { Header, Footer } from '../common';

import { NewListing, AuthModal } from '../common'

const DefaultLayout = ({ children }) => (                       
    <div className="default-layout">
      <Header />
      
      <div className="container">
        {children}    
      </div>
      
      <NewListing /> 
      <AuthModal />   
      <Footer />                                  
    </div>           
); 

export default DefaultLayout;