import React from 'react';
import './App.css';
import DaysTotalCollection from './DaysTotalCollection';
import DaysTotalSupply from './DaysTotalSupply';
import BloodStockSummary from './BloodStockSummary';
import StockSummary from './StockSummary';
import { Row, Col, Form} from 'react-bootstrap';
import {GlobalProvider} from "../context/globalContext";

export default function App() {
  
    return (
      <GlobalProvider>
        <div style={{margin:'60px 80px'}}>            
                <Form.Group className='mb-4'>
                  <BloodStockSummary/>
                </Form.Group>
                <Row>
                  <Col>
                  <Form.Group className='mb-3'>
                    <DaysTotalCollection/>
                    </Form.Group>
                  </Col>
                  <Col>
                  <Form.Group className='mb-3'>
                    <DaysTotalSupply/>
                    </Form.Group>
                  </Col>
                </Row>
                <Row className='mb-3'>      
                    <StockSummary/>      
                </Row>
            </div>
      </GlobalProvider>
    )
}


