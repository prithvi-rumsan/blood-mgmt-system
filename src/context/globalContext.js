import { createContext, useState, useEffect } from "react";
import { bloodGroupData } from "../helpers/bloodData";
import moment from 'moment';

const GlobalContext = createContext({
  bloodData: null,
  setBloodData: (obj) => {},
  bloodTotalCollection: null,
  setBloodTotalCollection: (obj) => {},
  bloodTotalSupply: null,
  setBloodTotalSupply: (obj) => {},
  date: null,
  setDate: (obj) => {},
  getCall: (obj) =>{},
  postCall: (obj) =>{}
});

const GlobalProvider = ({ children }) => {

  const [bloodData, setBloodData] = useState(bloodGroupData);
  const [bloodTotalCollection, setBloodTotalCollection] = useState(0);
  const [bloodTotalSupply, setBloodTotalSupply] = useState(0);
  const [date, setDate] = useState(moment().toDate());
  const [organization, setOrganization] =  useState('RUMSAN')

  const getCall = ()=>{
    console.log('API GET REQUEST', `/stocks?date=${moment(date).format('YYYY-MM-DD')}&organization=${organization}`);
  }

   const postCall = ()=>{
     let payload = {
      date: moment(date).format('YYYY-MM-DD'),
      organization,
      total_collection:bloodTotalCollection,
      total_supply:bloodTotalSupply,
      CRY:{},
      FFP:{},
      LPRC:{},
      PC:{},
      PRBC:{},
      PRP:{},
      WB:{},
      TOTAL:{}
    }

    let bloodComponents = ['CRY','FFP','LPRC','PC','PRBC','PRP','WB','TOTAL'];

    bloodData.forEach(el=>{
      bloodComponents.forEach(comp =>{
        payload[comp][el.bloodGroupName] = el[comp];
      })      
    });    
    console.log('API POST REQUEST',payload);

  }
  useEffect(()=>{getCall()},[date]);  
  
  return (
    <GlobalContext.Provider
      value={{
        bloodData,
        setBloodData,
        bloodTotalCollection,
        setBloodTotalCollection,
        bloodTotalSupply,
        setBloodTotalSupply,
        date,
        setDate,
        getCall,
        postCall
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

const GlobalConsumer = GlobalContext.Consumer;

export { GlobalProvider, GlobalConsumer, GlobalContext };
