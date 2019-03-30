import React from 'react';
import littleme from '../littleme.jpg'
import { Avatar } from '@material-ui/core';
import ReactPlayer from 'react-player'

class Christian extends React.Component{

    render(){
        return(
            <div id = "christian">
               <Avatar id ="avatar"alt="littlejustin.jpg" src={littleme}/>
               <div className="row" >
                    <div className="col s12 m4 offset-l4">
                        <p id = "note" >
                        I Love So Much Mom!!! Thank You for always believing in us and supporting us. I love You! Christian
                        </p>
                   </div>
                   <ReactPlayer url='https://youtu.be/R0xoMhCT-7A' playing width="80" height="30%" className="col s12 m4 offset-l4"/>
               </div>
            </div>
        )
    }
}
export default Christian