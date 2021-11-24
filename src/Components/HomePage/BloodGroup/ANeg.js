import React, { useContext } from 'react';
import { GlobalContext } from '../../../context/globalContext';

export default function ANeg() {
    const {bloodData, setBloodData} = useContext(GlobalContext);
    const groupMap = {
        a_pos: "A+ Positive",
        b_pos: "B+ Positive",
        ab_pos: "AB+ Positive",
        o_pos: "O+ Positive",
        a_neg: "A- Negative",
        b_neg: "B- Negative",
        ab_neg: "AB- Negative",
        o_neg: "O- Negative",
    }

    const bloodComponents = ["WB","PRBC","PRP","PC","FFP","CRY","LPRC","TOTAL"];

    const onBloodComponentValueChange = (e, index, bloodComponent) => {
        const newBloodData = [...bloodData]
        newBloodData[index][bloodComponent] = e.target.value;       
        setBloodData(newBloodData)
    }

    return (       
        bloodData?.map((bloodGroup, index) => {
           return <div className="row mb-2 p-2" style={{backgroundColor:`${bloodGroup.bgColor}`}} key={bloodGroup.bloodGroupName}>
            <div className="col-md-2 blood-group-container d-flex align-items-center">
                <button data-toggle="dropdown" className="btn btn-md dropdown-toggle btn-blood-group" style={{fontSize:'16px',fontWeight:'800'}}>{groupMap[bloodGroup.bloodGroupName]}</button>
                <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#" >Fill
                    all Zeros</a></li>
                </ul>
            </div>
            <div className="col-md-10">
                <div className="row p-1 component-list">
                    {bloodComponents.map(bloodComponent => {
                    return <div className="col-6 col-md text-center" key={bloodGroup.bloodGroupName + bloodComponent}>
                    <label htmlFor="date" style={{color:'#333'}}>{bloodComponent}</label>
                    <div className="input-group m-b number-spinner">                   
                    <input type="number" className="form-control input-item" value={bloodGroup[bloodComponent]} onChange={(event) => onBloodComponentValueChange(event, index, bloodComponent)} onBlur={()=>{}}/>                   
                </div>
            </div>
                }) }    
            
                </div>
            </div>
        </div> 
        })
              
    )
}
