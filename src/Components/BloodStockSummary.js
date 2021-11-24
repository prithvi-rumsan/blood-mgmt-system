import {React, useContext} from 'react';
import {Row, Col, Button} from 'react-bootstrap';
import DatePicker from "react-datepicker";
import './DatePicker.css';
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';
import { GlobalContext } from '../context/globalContext';

export default function App() {

    const {date, setDate} = useContext(GlobalContext);   

    const dateArrowHandler = (direction) => {
        let temp = new Date(date);
        let newDate;
        if(direction==='left'){    
            newDate = temp.setDate(temp.getDate()-1);
            setDate(new Date(newDate));
        }
        else if (direction ==='right'){
            newDate = temp.setDate(temp.getDate()+1);
            if( new Date(newDate) <= new Date()) setDate(new Date(newDate));
        }
    } 

    //useEffect(()=>{console.log('API GET REQUEST', moment(date).format('YYYY-MM-DD'))},[date]);


    return (
        <Row>
            <Col md={4} className="text-left">
                <h2 className="d-none d-md-block">Blood Stock Summary</h2>
            </Col>
            <Col md={{ span: 4, offset: 4 }}>
                <Row>
                <Col md={2} style={{margin:'0',padding:0,display:'flex',flexDirection:'row-reverse'}}><Button className="arrow" variant="outline-success" onClick={()=>{dateArrowHandler('left')}}><i className="fa fa-arrow-left" aria-hidden="true"></i></Button></Col>
                <Col md={8} style={{margin:'0',paddingLeft:'0',paddingRight:'0'}}><DatePicker selected={date} onChange={(inputDate) => setDate(inputDate)} dateFormat="yyyy/MM/dd"  maxDate={new Date()} style={{width:'10% !important'}}/></Col>
                <Col md={2} style={{margin:'0',padding:0}}> <Button className="arrow" variant="outline-success" onClick={()=>{dateArrowHandler('right')}}><i className="fa fa-arrow-right" aria-hidden="true"></i></Button></Col>
                </Row>
            </Col>
        </Row>     
    )
}
