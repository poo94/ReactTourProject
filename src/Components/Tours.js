import React ,{useEffect,useState} from 'react'
import Tour from './Tour'
import data from '../data'

function Tours() {

const [data1, setdata]= useState(data)

const removeData=(id)=>{
const newdata= data1.filter((data)=>data.id!==id)
setdata(newdata)
}

const getUser=async()=>{

    try{
        const response = await fetch(data1)
        const data = await response.json()
        setdata(data)
    }
    catch(err){
        console.log('Network Error')
    }
    
    
}

    useEffect(() => {
     getUser()
    }, [])

if(data1.length==0){
    return <div>
        <h4>No tours left</h4>
        <button onClick={()=>getUser()}>Refresh</button>
    </div>
}

    return (
        <div className="App">
            Tours Components!!
            {
                data1.map((details)=>{
                 return <Tour key={details.id} {...details} removeData={removeData}/>
                })
            }
            
        </div>
    )
}

export default Tours

