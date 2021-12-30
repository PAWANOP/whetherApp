import React,{useState} from 'react'


 const Whethercard = ({tempinfo}) => {

  const [whetherState, setwhetherState] = useState('')

  const{
    temp,
    pressure,
    humidity,
    main,
    country,
    speed,
    name,
    sunset,

  }=tempinfo;


  React.useEffect(() => {


    if (main) {
       switch (main) {
         case 'clouds':
          setwhetherState("fas fa-cloud-sun")
           break;
           
           
           case 'Haze':
          setwhetherState('fas fa-smog')
           break;

           
        case 'Clear':
          setwhetherState('fas fa-cloud-sun')
           break;


        case 'Mist':
          setwhetherState('fas fa-sun')
           break;
       
         default:
          setwhetherState("fas fa-cloud-moon-rain")
           break;
       }
    }
   
  }, [main])

  let sec = sunset;
  let date =new Date(sec*1000 )
  let timestring = `${date.getHours()}:${date.getMinutes()}`;

  return (
    <>
       <article>
             <div className="widget">
                   <div className="whetherIcon">
                     <i className={`${whetherState}`} ></i>
                   </div>
                   <div className="whetherInfo">
                    <div className="whether-temp-country">
                        <div className="temperature">
                          <span>{temp}&deg;</span>
                        </div>
                        <div className="humidity">                        
                           <span>{main}</span><br />
                           <span>{name}{country}</span>                   
                        </div>
                    </div>
                     <div className="whether-time">
                    <div className="time">{new Date().toLocaleString()}</div> 
                     </div>
                   </div> 
                   <div className="whetherfoursidesection">
                    <div className="whether-first-section">
                           <div className="whether-inside-1">
                             <span class="material-icons">wb_sunny</span>
                          </div>
                          <div className="whether-inside-2">
                                <span>{timestring}</span><br/>
                                <span>sunset</span>
                          </div>
                    </div>
                    <div className="whether-first-section">
                    <div className="whether-inside-1">
                    <span class="material-icons">invert_colors</span>
                              </div>
                              <div className="whether-inside-2">
                                <span>{humidity}</span><br />
                                <span>Humidity</span>
                              </div>
                    </div>
                    <div className="whether-first-section"> 
                    <div className="whether-inside-1">
                                  <span class="material-icons"><i class="fas fa-cloud-showers-heavy"></i></span>

                                  
                              </div>
                              <div className="whether-inside-2">
                                <span>{pressure}</span><br />
                                <span>pressure</span>
                              </div>      
                    </div>
                    <div className="whether-first-section">
                    <div className="whether-inside-1">
                    <span class="material-icons">speed</span>
                              </div>
                              <div className="whether-inside-2">
                                <span>{speed}</span><br />
                                <span>speed</span>
                              </div>     
                    </div>
                   </div>
                    
             </div>
       </article>
    </>
  )
}

export default Whethercard;