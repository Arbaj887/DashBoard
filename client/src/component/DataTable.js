import React from 'react';

function DataTable({ data }) {
    let srNo=0;
    if(!data){

       return <h1 className='dataTableH1'>Loding.....</h1> 
    }
  return (
    <div className='dataTable'>
      <table>
        <thead>
          <tr className='dataHead'>
            <th>Sr.no</th>
            <th>Topics</th>
            <th>Country</th>
            <th>Intensity</th>
            <th>Likelihood</th>
            <th>Relevance</th>
            <th>Year</th>
            <th>Region</th>
          </tr>
        </thead>
        
        <tbody>
          { 
          
          data.map((item, index) => (
            <tr key={index}>
              <td>{srNo=srNo+1}</td>
              <td>{item.topic}</td>
              <td>{item.country}</td>
              <td>{item.intensity}</td>
              <td>{item.likelihood}</td>
              <td>{item.relevance}</td>
              <td>{item.end_year}</td>
              <td>{item.region}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;
