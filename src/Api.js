import React, { useState } from 'react'

const Api = () => {
    const [data, setData]= useState([])
    
      
  async  function getdata(){
     var obj= await fetch("https://jsonplaceholder.typicode.com/posts")
           var actual= await obj.json()
            setData(actual)
            console.log(actual)

    //     .then(function(obj){
    //     obj.json()
    //     // console.log(obj)
    //     .then(function(actual){
    //       setData(actual)
    //       console.log(data)
    //     }).catch(function(err){

    //     })
    // }).catch(function(err){

    // })
    }
    
  return (
    <div>
      <button onClick={getdata }>aa</button>
     <table border="3">
      <thead>
        <th>id</th>
        <th>body</th>
      </thead>
      <tbody>
        {
          data.map((obj)=>{
            const{id,title}=obj
            return(
              <tr>
                <td>{id}</td>
                <td>{title}</td>
              </tr>
            )
          })
        }
      </tbody>

     </table>
    </div>
  )
}

export default Api