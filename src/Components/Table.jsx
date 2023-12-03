import React from 'react'
 function Table({tableData}) {
  return (
    <div>
            <table>
                <tr>
                    <th>S.No</th>
                    <th>Procedures</th>
                    <th>Required Document or forms that should be in CaseWare file</th>
                    <th>ISA/ISQC Local Law reference</th>
                    <th>Applicability(Yes/No/NA)</th>
                    <th>Breif Description of finding/ Documentation of work performed by reviewer</th>

                </tr>
                {tableData.map((val, key) => {
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
  )
}
export default Table;
