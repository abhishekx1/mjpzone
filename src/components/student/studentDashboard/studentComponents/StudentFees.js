import React from 'react'
import '../studentComponents/studentComponentCss/StudentFees.css'
function StudentFees() {
  return (
    <>   
    <div className='head' >Fee Structure </div>
    <div className='sub-head' > <h2>MCA</h2> </div>
    <table className='table' >
      <tr>
            <th>Types of Fees </th>
            <th>Amount(in Indian Ruppes)</th>
      </tr>
      <tr>
            <td>Tution Fee/ Year</td>
            <td>45150</td>
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
            <td>65820</td>
        </tr>
    </table>
    <div className='sub-head' > <h2>Btech</h2> </div>
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
    <div>  </div>
    </>
  )
}

export default StudentFees