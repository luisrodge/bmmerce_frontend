import React from 'react';
import { Nav, Footer } from '../common';

const DefaultLayout = ({ children }) => (                       
    <div>
      <Nav />
      <div className="container">
        {children}    
      </div>    
      <Footer />                                  
    </div>           
); 

export default DefaultLayout;