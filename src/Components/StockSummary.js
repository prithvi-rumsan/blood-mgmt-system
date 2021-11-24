import React from 'react';
import ANeg from './BloodGroup/ANeg';

// import APos from './BloodGroup/APos';
// import BPos from './BloodGroup/BPos';
// import OPos from './BloodGroup/OPos';
// import AbPos from './BloodGroup/AbPos';
// import BNeg from './BloodGroup/BNeg';
// import ONeg from './BloodGroup/ONeg';
// import AbNeg from './BloodGroup/AbNeg';



export default function App() {
    return (  
    <div className="form-group">
       <label>
          <h4><b>Stock Summary</b></h4>
        </label>
        <div className='m-3'>
          <ANeg/>
          {/* <BPos/>
          <AbPos/>    
          <OPos/>           
          <ANeg/>
          <BNeg/>   
          <AbNeg/>    
          <ONeg/> */}
        </div>       
    </div>     
            
    )
}
