import React ,{useState} from 'react'
import '../studentComponents/studentComponentCss/StudentFees.css'


function StudentFees() {
    const[allValues, setValues] = useState({tutionFees:45150, totalFees:65820,category:'MCA'})
    function updateBtech(){
        setValues({tutionFees: 75150, totalFees:95820,category:'Btech'})
    }
    function updateMCA(){
        setValues({tutionFees: 45150, totalFees:65820,category:'MCA'})
    }
  return (
    <>   
    <div className='head' >Fee Structure </div>
    
        <div className="btn-container">
            <button className='filter-btn' onClick={updateMCA}>MCA</button> 
            <button className='filter-btn' onClick={updateBtech}>Btech</button> 
        </div>
        <div className="sub-head">
       <h2>    {allValues.category} Fees Structure </h2> </div>
        
    <table className='table' >
      <tr>
            <th>Types of Fees </th>
            <th>Amount(in Indian Ruppes)</th>
      </tr>
      <tr>
            <td>Tution Fee/ Year</td>
            <td>{allValues.tutionFees}</td>
        </tr>
        <tr>
            <td>Caution Money(Refundable)</td>
            <td>8000</td>
        </tr>
        <tr>
            <td>Hostel Fee/ Year</td>
            <td>12550</td>
        </tr>
        <tr>
            <td>Sports Fee/ Year</td>
            <td>120</td>
        </tr>
        <tr>
            <td>Total Fee </td>
            <td>{allValues.totalFees}</td>
        </tr>
    </table>
    {/* <div className='sub-head' > <h2>Btech</h2> </div>
    <table className='table' >
      <tr>
            <th>Types of Fees </th>
            <th>Amount(in Indian Ruppes)</th>
      </tr>
      <tr>
            <td>Tution Fee/ Year</td>
            <td>75150</td>
        </tr>
        <tr>
            <td>Caution Money(Refundable)</td>
            <td>8000</td>
        </tr>
        <tr>
            <td>Hostel Fee/ Year</td>
            <td>12550</td>
        </tr>
        <tr>
            <td>Sports Fee/ Year</td>
            <td>120</td>
        </tr>
        <tr>
            <td>Total</td>
            <td>95,820</td>
        </tr>
    </table>
    <div>  </div> */}
    </>
  )
    
}

export default StudentFees