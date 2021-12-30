import React,{useState,useEffect} from 'react' 
import "./style.css";
import Whethercard from './whethercard'



const Whethersearch = () => {

  const [searchValue, setSearchValue] = useState('jaipur')
  const [tempinfo, setTempInfo] = useState({})
  
  const getwhetherinfo = async ()=>{
    

    try {
       let url = `http://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=ecc12930326f1e77df2665e2f7444e9e`;

    let res =await fetch(url)
    let data = await res.json()
    

    const {temp , pressure, humidity} = data.main;
    const [{main}] = data.weather;
    const {country , sunset} = data.sys;
    const {speed} = data.wind;
    const {name} = data;

    const mynewwhether ={
       
      temp,
      pressure,
      humidity,
      main,
      country,
      speed,
      name,
      sunset,

    }
    setTempInfo(mynewwhether);

    

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getwhetherinfo();
  }, [])
  return (
    <>
       <div className="wrap">
           <div className="search">
             <input type="text" className="searchTerm" id="search" value={searchValue} onChange={(e)=> setSearchValue(e.target.value)}/>
             <button className="searchButton" type="button" onClick={getwhetherinfo}>Search</button>
           </div>    
       </div>
       <Whethercard tempinfo={tempinfo}/>
    </>
  )
}


export default Whethersearch;