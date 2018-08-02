import React from 'react';

import { 
    Footer, 
    NewListing 
} from '../common';

const BusinessLayout = ({ children }) => (                       
    <div className="business-layout">
        {children}    
        <NewListing /> 
        <Footer />                                  
    </div>           
); 

export default  BusinessLayout;