import React, { useState } from 'react'
import "./userinput.css"
export default function UserInput() {
    const [name, setname] = useState('')
    const [department, setdepartment] = useState('')
    const [phone, setphone] = useState('')
    const [itemsArray, setitemsArray] = useState([])

    const additems = (e) => {
        e.preventDefault()
        const inputCollect = {
            name: name,
            department: department,
            phone: phone
        }
        setitemsArray(data => [inputCollect, ...data])
        setphone('')
        setdepartment('')
        setname('')
    }

    Edit=(e)=>{
        console.log(e.value)
    }

    return (
        <div className="input_container">
            <form>
                name: <input id="inputfield1" type="text" name='name' placeholder="enter firstName" onChange={(e) => {
                    setname(e.target.value)
                }}
                    value={name}
                />
                department: <input id="inputfield2" type="text" name="department" placeholder="enter department" onChange={(e) => {
                    setdepartment(e.target.value)
                }} value={department}
                />
                phone no: <input id="inputfield3" type="text" name="phoneno" placeholder="enter phoneNo" onChange={(e) => {
                    setphone(e.target.value)
                }} value={phone}
                />
                <button type="submit" onClick={additems} id="btn">Add items</button>
                <button type="submit" id="upbtn">update items</button>

            </form>
            <table id="table">
                <thead>
                    <tr>
                        <th>First name</th>
                        <th>Department</th>
                        <th>phone no</th>
                        <th>Editable</th>
                        <th>Deletable</th>
                    </tr>
                </thead>
                <tbody id="tbody">
                    {itemsArray.map((item,index) => (
                        <tr key={index} >
                           <td> {item.name} </td>
                           <td> {item.department} </td>
                           <td> {item.phone} </td>
                           <td value={index} onClick={this.Edit()}> Edit </td>
                           <td> Delete </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
