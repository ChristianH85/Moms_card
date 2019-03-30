import React from 'react';
import ReactPlayer from 'react-player';

class Landing extends React.Component{
render(){
    return(
        <div className= "landing">
           <div className="ballon"></div>
           <ReactPlayer className= "audio" url='https://www.youtube.com/watch?v=nTYwDP6tEzc' playing width="20%" height="20%" /> 
        </div>
    )
}
}
export default Landing