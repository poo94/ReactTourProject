import React,{useState} from 'react'

 const Tour=({desc,location,url,id,removeData})=> {
     const [readMore, setreadMore] = useState(false)
    return (
        <div className="App">
            <h4> {location}</h4>
            <div>
            <img src={url} alt="alt" />
            </div>
            <p>{readMore?desc:`${desc.substring(0,169)}`}...</p>
            <button onClick={()=>setreadMore(!readMore)}>{readMore?"read less":"show more"}</button>
            <button onClick={()=>removeData(id)}>Not interested</button>
        </div>  
    )
}   

export default Tour
