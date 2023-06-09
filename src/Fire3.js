
import { Link, useNavigate } from 'react-router-dom'
import Firebase from './Firebase'
import React, { useEffect, useState } from 'react'
const Fire3 = () => {
    const [all,setAll] = useState({})
    // const[obj,setObj]=useState()
    const navigate = useNavigate();
    useEffect(() => {
        Firebase.child('record').once('value', (snapshot) => {
            setAll(snapshot.val())
        })
    },[all])

   const del=(key)=>{
if(window.confirm("pakka"))
{Firebase.child(`record/${key}`).remove((err)=>{
    if(err)
    alert("err")
    else
    alert("data deleted")
})}

}
const edit=(key)=>{
    navigate(`/${key}`)
// Firebase.child(`record/${key}`).once("value",(snapshot)=>{
//     setObj(snapshot.val())
// })
}
    return (
        <div>
            <h1 style={{textAlign:"center"}}>Table details</h1>
        <table style={{margin:"auto", marginTop:"50px"}} margin border="3px">
            <thead>
                <th>name</th>
                <th>phone</th>
                <th>address</th>
                <th>image</th>
                <th>operations</th>
            </thead>
            <tbody>
                {
                    Object.keys(all||{}).map((key)=>{
                        return(
                            <>
                            <tr>
                                <td>{all[key].name}</td>
                                <td>{all[key].phone}</td>
                                <td>{all[key].address}</td>
                                <td><object data={all[key].image} type=""></object></td>
                                <td><button onClick={()=>edit(key)} >edit</button><button onClick={()=>del(key)} >delete</button></td>
                            </tr>
                            <tr>
                                
                            </tr>
                            </>
                        )
                    })
                }
            </tbody>
        </table>
        <button style={{marginLeft:"400px"}}><Link to="/" >back to home</Link></button> 
        </div>
    )
}

export default Fire3