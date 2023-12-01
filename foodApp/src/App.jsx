import { useEffect, useState } from "react"

function App() {
  const [data,setData] = useState('');
  useEffect(()=>{
    fetch("https://the-mexican-food-db.p.rapidapi.com/4",
    {headers: {
      'X-RapidAPI-Key': 'a439723146msh6f2467c9292c5e7p15a0ebjsn1acd04cff1c1',
      'X-RapidAPI-Host': 'the-mexican-food-db.p.rapidapi.com'
    }}
  )
    .then((res)=> res.json())
    .then((res)=>setData(res))
  }
    ,[])
  return (
    
    <>
      <h1>Food--App</h1>
      <h2>Step 1 :{data.id}</h2>
      <h2>Step 2 :{data.title}</h2>
      {/* <h2>Step 3 :{data.method[0]}</h2> */}
    </>
  )
}

export default App
