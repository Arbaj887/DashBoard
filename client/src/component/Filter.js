import React, { useState,useContext } from 'react'

import axios from 'axios';
import DataContext from '../context/DataContext';

function Filter() {
   const {setBackendData}= useContext(DataContext)

   const [endYear,  setEndYear]= useState('');
   const [topics,  setTopics]= useState('');
   const [sector,  setSector]= useState('');
   const [region,  setRegion]= useState('');
   const [pest,    setPest]= useState('');
   const [source,   setSource]= useState('');
   const [country,   setCountry]= useState('');
   


  const submitFilter= async (e)=>{
    e.preventDefault();
    
    const data = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/filterData`,{
        endYear,topics, sector, region, pest,   source,   country  
    })
    setBackendData(data.data)
     
  }

 

  return (
    <>
    
    <div className='filter-section'>
    
     
    
     
     <h1>Filter Section</h1>

     
     

     <div className='filter-form'>
        <input type="text" placeholder='End Year ex:2017' value={endYear} onChange={(e)=>setEndYear(e.target.value)}/>
        <input type="text" placeholder='Topics' value={topics} onChange={(e)=>setTopics(e.target.value)}/>
        <input type="text" placeholder='Sector' value={sector} onChange={(e)=>setSector(e.target.value)}/>
        <input type="text" placeholder='Region' value={region} onChange={(e)=>setRegion(e.target.value)}/>
        <input type="text" placeholder='PEST'    value={pest} onChange={(e)=>setPest(e.target.value)}/>
        <input type="text" placeholder='Source'   value={source} onChange={(e)=>setSource(e.target.value)}/>
        <input type="text" placeholder='Country' value={country} onChange={(e)=>setCountry(e.target.value)}/>
        
     </div>
     <button onClick={submitFilter}>
        Submit
     </button>

    </div>
    
    </>
  )
}

export default Filter
