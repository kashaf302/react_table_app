import { useState } from 'react'
import './App.css'
import data from './Data.js'
console.log("data", data)
function App() {
    // let tableData=[]
    // tableData=data
    // console.log(tableData);
  return (
    <>
    <div className='style_data' >
      <h1>RTR Review</h1>
      <button type="button" >Planning</button>
      <button type="button">Execution</button>
      <button type="button">Completion</button>

    </div>
   <div className="App">
            <table>
                <tr>
                    <th>S.No</th>
                    <th>Procedures</th>
                    <th>Required Document or forms that should be in CaseWare file</th>
                    <th>ISA/ISQC
                      Local Law reference
                    </th>
                    <th>Applocability(Yes/No/NA)</th>
                    <th>Breif Description of finding/ Documentation of work performed by reviewer</th>

                </tr>
                {data.map((val, key) => {
                    return (
                        <tr key={key}>
                          <td>{val.SNo}</td>
                            <td>{val.ProcedureName}</td>
                            <td>{val.RequiredDocumentForms}</td>
                            <td>{val.Applicability}</td>
                            <td>{val.ISALocalLawReference}</td>
                            <td>{val.BriefDescription}</td>

                        </tr> 
                    )
                })}
            </table>
        </div>
    </>
  )
}

export default App
