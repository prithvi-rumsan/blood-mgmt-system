import React from 'react';
import './App.css';

export default function App() {
    return (        
            <div className="form-group">
                        <label>
                          <h3><b>Day's Total Supply</b></h3>
                        </label>
                        <input type="number" min="0" name="total_supply" value="" className="form-control input-item"
                          style={{fontWeight: '800',backgroundColor: '#ffad8fff'}} />
                      </div>   
    )
}
