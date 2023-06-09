import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [data, setdata] = useState({})
  var [arr, setArr] = useState(JSON.parse(localStorage.getItem("key")))
    // const [clicked, setclicked]=useState()  
  const store = (e) => {
  //   var reader = new FileReader()
  //   reader.readAsDataURL(e.target.files[0])
  //  reader.onload 

    setdata({ ...data, [e.target.name]: e.target.value})
  }
    var reader=""
     const upload=(e)=>{
    var reader=new FileReader()
    reader.readAsDataURL(e.target.files[0])
    reader.onload=()=>{
      setdata({...data,[e.target.name]:reader.result})
    }
  }

  const save = () => {
    if (arr == null) {
      arr = []
    }
    setArr([...arr, data])
  }

  const del=(e)=>{
    var item=arr.filter((o,index)=>{
      return(
        index!=e.target.id
      )
    })
    setArr(item)
  }
  var clicked=""
  const edit=(e)=>{
      clicked=e.target.id
      console.log(e)
        setdata(arr[e.target.id])
  }
  
  const update=()=>{
  var items2=arr.map((ob,index)=>{
          return(
            index!=clicked?ob:data
          )
      })
      setArr(items2)
    }

  useEffect(() => {
    localStorage.setItem("key", JSON.stringify(arr))
    setdata({ name: "", phone: "", address: "", image: "" })
  }, [arr])
  return (
    <div id='box' style={{ backgroundColor: "cyan", height: "100%", textAlign: "center" }}>
      <input type="text" value={data.name} placeholder='name' style={{ height: "20px" }} onChange={store} name='name' /><br /><br />
      <input type="text" value={data.phone} placeholder='phone' style={{ height: "20px" }} onChange={store} name='phone' /><br /><br />
      <input type="text" value={data.address} placeholder='address' style={{ height: "20px" }} onChange={store} name='address' /><br /><br />
      <input type="file" onChange={upload} name='image' /><br />
      <button id='save' onClick={save}>save</button><br/>
      <button onClick={update}>update</button><br/>

      <table border="3" style={{display:"inline-block", backgroundColor:"skyblue"}}>
        <thead>

          <th style={{ padding: "50px" }}>name</th>
          <th style={{ padding: "50px" }}>phone</th>
          <th style={{ padding: "50px" }}>adderss</th>
          <th style={{ padding: "50px" }}>image</th>
          <th style={{ padding: "50px" }}>operations</th>
        </thead>
        <tbody>
          {arr ?
            arr.map(function (x, index) {
              return (
                <tr>
                  <td>{x.name}</td>
                  <td>{x.phone}</td>
                  <td>{x.address}</td>
                  <td><img src={x.image} alt="" style={{ height: "50px", width: "50px" }} /></td>
                  <td><button onClick={edit} id={index}>edit</button><button onClick={del} id={index}>delete</button></td>
                </tr>
              )
            }) : ''
          }
        </tbody>
      </table>

    </div>
  );
}

export default App;
