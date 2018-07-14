import React from 'react';
import { Header, Footer } from '../common';

const DefaultLayout = ({ children }) => (                       
    <div>
      <Header />
      <div className="container">
        {children}    
      </div>    
      <Footer />                                  
    </div>           
); 

export default DefaultLayout;