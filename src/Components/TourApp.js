import React ,{useState} from 'react'
import logo from '../logo.svg';
import Loading from './Loading'
import Tours from './Tours'

const TourApp=()=> {

const [state, setstate] = useState(true)


if(state){
    return (
        <div className="App-header">
           <img src={logo} className="App-logo" alt="logo" />
            <Loading/>
            {
                setTimeout(()=>{
                    setstate(false)
                },1000)
            }
        </div>
    )
}
else{
    return (
        <div className="App-header">
            <Tours />
        </div>
    )

    }
    


    
}

export default  TourApp
