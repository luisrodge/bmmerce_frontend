import React from 'react';

import { 
    MinimalHeader, 
    Footer, 
    NewListing 
} from '../common';

const MinimalLayout = ({ children }) => (                       
    <div className="minimal-layout">
        <MinimalHeader />
        <div className="container">
            {children}    
        </div>    
        <NewListing /> 
        <Footer />                                  
    </div>           
); 

export default  MinimalLayout;