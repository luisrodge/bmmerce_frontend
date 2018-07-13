import React from 'react';

import { MinimalHeader, Footer } from '../common';

const MinimalLayout = ({ children }) => (                       
    <div>
        <MinimalHeader />
        <div className="container">
            {children}    
        </div>    
        <Footer />                                  
    </div>           
); 

export default  MinimalLayout;