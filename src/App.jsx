import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link,  useNavigate}  from 'react-router-dom'
import './App.css'
import Table from './Components/Table.jsx'
import data from './Data.js'
console.log("data", data)

function App(){
  const [tableData , setTableData]=useState(data)
   const [currentPhase , setCurrentPhase]=useState('Planning')

  useEffect(() => {
    console.log("Use effect");
    console.log("tableData", tableData);

    //selected Phase 
    const  filterData=data.filter((item)=>item.Phase===currentPhase)
   console.log("filterData ", filterData)
   setTableData(filterData)
  }, [currentPhase]);

  const handleTabClick = (phase) => {
    setCurrentPhase(phase);
  };
  return (
   
    <>
    <div className='style_data' >
     <button className='rtr_listing' type="button"> &lt; Go to RTR Listing  </button>
      <h1>RTR Review</h1>
      <button type="button" onClick={()=>handleTabClick('Planning')} className={currentPhase === 'Planning' ? 'active' : ''} >Planning</button>
      <button type="button" onClick={()=>handleTabClick('Execution')} className={currentPhase === 'Execution' ? 'active' : ''}>Execution</button>
      <button type="button" onClick={()=>handleTabClick('Completion')} className={currentPhase === 'Completion' ? 'active' : ''}>Completion</button>

    </div>
    <div className='App'>
    
        <Table tableData={tableData}></Table>
    </div>
    
  
    </> 
     )
   
}

export default App
