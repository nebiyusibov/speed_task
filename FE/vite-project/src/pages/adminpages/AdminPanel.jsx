import { useEffect, useState } from "react"

function AdminPanel() {
  const [user,setuser]=useState([])

  async function getUser() {
       const res= await fetch("http://localhost:3000/user")
       const data=await res.json()
       setuser(data)
   }
   useEffect(()=>{
       getUser()
   },[])

   function getDelete(item) {
    setuser(user.filter((x)=>x._id !== item._id))
   }

  return (
    <div>
      <table border={"1px"}>
        <thead>
          <tr>
            <th>name</th>
            <th>price</th>
            <th>edit/delete</th>
          </tr>
        </thead>
        {user.map((x)=>(
          <tbody key={x.id}>
            <tr>
              <td>{x.name}</td>
              <td>{x.price}</td>
              <td><button onClick={()=>getDelete(x)}>delete</button></td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  )
}

export default AdminPanel