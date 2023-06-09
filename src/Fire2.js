import React, { useEffect, useState } from 'react'
import Firebase from './Firebase'
import { Link, useParams } from 'react-router-dom'
const Fire2 = () => {
  let { id } = useParams();


  const [data, setData] = useState({})

  useEffect(() => {
    Firebase.child(`record/${id}`).once('value', (snapshot) => {
      if (snapshot.val() == null)
        setData({})
      else
        setData(snapshot.val())
    })
  }, [id])
  const store = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }
  // var reader=""
     const upload=(e)=>{
    var reader=new FileReader()
    reader.readAsDataURL(e.target.files[0])
    reader.onload=()=>{
      setData({...data,[e.target.name]:reader.result})
    }
  }
  // var a = ""

  const save = () => {
    alert("enter password")
    let a = prompt("password")
    if (a === 94165) {
      Firebase.child('record').push(data)
      setData({ name: "", phone: "", address: "" })
    }
    else {
      alert("wrong entry")
    }
  }
  const update = () => {
    Firebase.child(`record/${id}`).update(data)
    alert("data updated")
  }
  return (
    <div style={{ backgroundColor: "cyan", textAlign: "center", height: "500px" }}>
      <h1>Registrarion Form</h1>
      <hr />
      <input type="text" style={{ height: "30px", width: "500px" }} value={data.name} placeholder='name' name='name' onChange={store} /><br /><br />
      <input type="text" style={{ height: "30px", width: "500px" }} value={data.phone} placeholder='phone' name='phone' onChange={store} /><br /><br />
      <input type="text" style={{ height: "30px", width: "500px" }} value={data.address} placeholder='address' name='address' onChange={store} /><br /><br />
      <input type="file" onChange={upload} name='image' /><br />
      <button onClick={save}><Link to="/display">save</Link></button><br />
      <button onClick={update}> <Link to="/display">update</Link> </button>



    </div>
  )
}

export default Fire2