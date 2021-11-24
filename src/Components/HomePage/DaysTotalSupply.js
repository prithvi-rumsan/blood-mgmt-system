import {React, useContext} from 'react';
import { GlobalContext } from '../../context/globalContext';

export default function App() {  

  const {bloodTotalSupply, setBloodTotalSupply, postCall} = useContext(GlobalContext);

  //useEffect(()=>{console.log('API GET REQUEST', bloodTotalSupply)},[bloodTotalSupply]);

  return (        
    <div className="form-group">
        <label>
          <h4><b>Day's Total Supply</b></h4>
        </label>
        <input type="number" min="0" name="total_supply" className="form-control input-item remove-arrow"
          style={{fontWeight: '800',backgroundColor: '#ffad8fff'}} value={bloodTotalSupply? bloodTotalSupply : ''} onChange={(e)=>{setBloodTotalSupply(e.target.value)}} onBlur={postCall}/>
    </div>   
  )
}
