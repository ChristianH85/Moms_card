import React from 'react';
import littlenee from '../littlenee.jpg'
import { Avatar } from '@material-ui/core';
import ReactPlayer from 'react-player'

class Renee extends React.Component{

    render(){
        return(
            <div id = "nee">  
                <Avatar id ="avatar"alt="littleme.jpg" src={littlenee}/>
                <div className="row" >
                    <div className="col s12 m4 offset-l4">
                        <p id = "note" >
                        Happy birthday, mom/grandma! We love and miss you very much! Wishing you a relaxing beach vacation and birthday weekend. May this year bring you lots of peace and prosperity! Sending endless love your way! ❤️ -Renée, Liliana, Benjamin 
                        </p>
                   </div>
                   <ReactPlayer url='https://m.youtube.com/watch?v=K_lq0PtXe3k' playing width="80" height="30%" className="col s12 m4 offset-l4"/>
               </div>
            </div>
        )
    }
}
export default Renee