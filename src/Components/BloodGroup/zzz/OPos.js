import React from 'react';

export default function App() {
    return (       
        <div className="row mb-2 p-2" style={{backgroundColor:'#f15a24ff'}}>
            <div className="col-md-2 blood-group-container d-flex align-items-center">
                <button data-toggle="dropdown" className="btn btn-md dropdown-toggle btn-blood-group" style={{fontSize:'16px',fontWeight:'800'}}>O+ Positive</button>
                <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#" onClick="$('#dailyTasks').trigger('fill-zeros');return false;">Fill
                    all Zeros</a></li>
                </ul>
            </div>
            <div className="col-md-10">
                <div className="row p-1 component-list">
                
            <div className="col-6 col-md text-center">
                <label htmlFor="date" style={{color:'#fff'}}>WB</label>
                <div className="input-group m-b number-spinner"><span className="input-group-prepend d-block d-sm-block d-md-none">
                    <button type="button" className="btn btn-default btn-number-spinner" data-dir="dwn"><span className="fa fa-chevron-down"></span></button> </span>
                    <input type="number" className="form-control input-item" data-group="WB" name="a_pos" onChange="$('#dailyStock').trigger('data-change', {source: this})"/>
                    <span className="input-group-append d-block d-sm-block d-md-none">
                    <button type="button" className="btn btn-default btn-number-spinner" data-dir="up"><span className="fa fa-chevron-up"></span></button> </span>
                </div>
            </div>
            
            <div className="col-6 col-md text-center">
            <label htmlFor="date" style={{color:'#fff'}}>PRBC</label>
            <div className="input-group m-b number-spinner"><span className="input-group-prepend d-block d-sm-block d-md-none">
                <button type="button" className="btn btn-default btn-number-spinner" data-dir="dwn"><span className="fa fa-chevron-down"></span></button> </span>
                <input type="number" className="form-control input-item" data-group="PRBC" name="a_pos" onChange="$('#dailyStock').trigger('data-change', {source: this})"/>
                <span className="input-group-append d-block d-sm-block d-md-none">
                <button type="button" className="btn btn-default btn-number-spinner" data-dir="up"><span className="fa fa-chevron-up"></span></button> </span>
            </div>
            </div>
            
            <div className="col-6 col-md text-center">
            <label htmlFor="date" style={{color:'#fff'}}>PRP</label>
            <div className="input-group m-b number-spinner"><span className="input-group-prepend d-block d-sm-block d-md-none">
                <button type="button" className="btn btn-default btn-number-spinner" data-dir="dwn"><span className="fa fa-chevron-down"></span></button> </span>
                <input type="number" className="form-control input-item" data-group="PRP" name="a_pos" onChange="$('#dailyStock').trigger('data-change', {source: this})"/>
                <span className="input-group-append d-block d-sm-block d-md-none">
                <button type="button" className="btn btn-default btn-number-spinner" data-dir="up"><span className="fa fa-chevron-up"></span></button> </span>
            </div>
            </div>
            
            <div className="col-6 col-md text-center">
            <label htmlFor="date" style={{color:'#fff'}}>PC</label>
            <div className="input-group m-b number-spinner"><span className="input-group-prepend d-block d-sm-block d-md-none">
                <button type="button" className="btn btn-default btn-number-spinner" data-dir="dwn"><span className="fa fa-chevron-down"></span></button> </span>
                <input type="number" className="form-control input-item" data-group="PC" name="a_pos" onChange="$('#dailyStock').trigger('data-change', {source: this})"/>
                <span className="input-group-append d-block d-sm-block d-md-none">
                <button type="button" className="btn btn-default btn-number-spinner" data-dir="up"><span className="fa fa-chevron-up"></span></button> </span>
            </div>
            </div>
            
            <div className="col-6 col-md text-center">
            <label htmlFor="date" style={{color:'#fff'}}>FFP</label>
            <div className="input-group m-b number-spinner"><span className="input-group-prepend d-block d-sm-block d-md-none">
                <button type="button" className="btn btn-default btn-number-spinner" data-dir="dwn"><span className="fa fa-chevron-down"></span></button> </span>
                <input type="number" className="form-control input-item" data-group="FFP" name="a_pos" onChange="$('#dailyStock').trigger('data-change', {source: this})"/>
                <span className="input-group-append d-block d-sm-block d-md-none">
                <button type="button" className="btn btn-default btn-number-spinner" data-dir="up"><span className="fa fa-chevron-up"></span></button> </span>
            </div>
            </div>
            
            <div className="col-6 col-md text-center">
            <label htmlFor="date" style={{color:'#fff'}}>CRY</label>
            <div className="input-group m-b number-spinner"><span className="input-group-prepend d-block d-sm-block d-md-none">
                <button type="button" className="btn btn-default btn-number-spinner" data-dir="dwn"><span className="fa fa-chevron-down"></span></button> </span>
                <input type="number" className="form-control input-item" data-group="CRY" name="a_pos" onChange="$('#dailyStock').trigger('data-change', {source: this})"/>
                <span className="input-group-append d-block d-sm-block d-md-none">
                <button type="button" className="btn btn-default btn-number-spinner" data-dir="up"><span className="fa fa-chevron-up"></span></button> </span>
            </div>
            </div>
            
            <div className="col-6 col-md text-center">
            <label htmlFor="date" style={{color:'#fff'}}>LPRC</label>
            <div className="input-group m-b number-spinner"><span className="input-group-prepend d-block d-sm-block d-md-none">
                <button type="button" className="btn btn-default btn-number-spinner" data-dir="dwn"><span className="fa fa-chevron-down"></span></button> </span>
                <input type="number" className="form-control input-item" data-group="LPRC" name="a_pos" onChange="$('#dailyStock').trigger('data-change', {source: this})"/>
                <span className="input-group-append d-block d-sm-block d-md-none">
                <button type="button" className="btn btn-default btn-number-spinner" data-dir="up"><span className="fa fa-chevron-up"></span></button> </span>
            </div>
            </div>
            
            <div className="col-6 col-md text-center">
            <label htmlFor="date" style={{color:'#fff'}}>TOTAL</label>
            <div className="input-group m-b number-spinner"><span className="input-group-prepend d-block d-sm-block d-md-none">
                <button type="button" className="btn btn-default btn-number-spinner" data-dir="dwn"><span className="fa fa-chevron-down"></span></button> </span>
                <input type="number" className="form-control input-item" data-group="TOTAL" name="a_pos" onChange="$('#dailyStock').trigger('data-change', {source: this})"/>
                <span className="input-group-append d-block d-sm-block d-md-none">
                <button type="button" className="btn btn-default btn-number-spinner" data-dir="up"><span className="fa fa-chevron-up"></span></button> </span>
            </div>
            </div>
            
                </div>
            </div>
        </div>       
    )
}
