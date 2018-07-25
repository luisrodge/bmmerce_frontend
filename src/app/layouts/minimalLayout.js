import React from 'react';

import { MinimalHeader, Footer } from '../common';

const MinimalLayout = ({ children }) => (                       
    <div className="minimal-layout">
        <MinimalHeader />
        <div className="container">
            {children}    
        </div>    
        <Footer />                                  
    </div>           
); 

export default  MinimalLayout;