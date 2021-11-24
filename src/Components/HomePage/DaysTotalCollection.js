import {React, useContext} from 'react';
import { GlobalContext } from '../../context/globalContext';

export default function App() {

  const {bloodTotalCollection, setBloodTotalCollection, postCall} = useContext(GlobalContext)
  //useEffect(()=>{console.log('API GET REQUEST', bloodTotalCollection)},[bloodTotalCollection]);  

  return (        
    <div className="form-group">
        <label>
          <h4><b>Day's Total Collection</b></h4>
        </label>
        <input type="number" min="0" name="total_collection" className="form-control input-item remove-arrow"
          style={{fontWeight: '800',backgroundColor:'#c7e07bff'}} value={bloodTotalCollection? bloodTotalCollection : '' } onChange={(e)=>{setBloodTotalCollection(e.target.value)}} onBlur={postCall}/>
    </div>   
  )
}
