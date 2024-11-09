import React, { useState } from 'react'
import { FaFilter } from "react-icons/fa6";
import { BsGraphUpArrow } from "react-icons/bs";
import Filter from './Filter';
import Graph from './Graph';
function Header() {
    const [filterVisible,setFilterVisible]=useState(false);
    const [graphVisible,setGraphVisible]=useState(false)

   const showFilterSection=()=>{
      setFilterVisible(!filterVisible)
   }
   
   const showGraphSection=()=>{
    setGraphVisible(!graphVisible)
   }

  return (
    <>
     
      <div className='header'>
      <BsGraphUpArrow className='graph-icon' onClick={showGraphSection}/>
       <FaFilter className='filter-icon' onClick={showFilterSection}/>
        
       
       </div>
       

       {graphVisible ?<Graph />:''}
       { filterVisible? <Filter />:''}
       
       </>
  )
}

export default Header
