import React from 'react';
import littlej from '../littlej.jpg'
import { Avatar } from '@material-ui/core';
import ReactPlayer from 'react-player'

class Justin extends React.Component{

    render(){
        return(
            <div id = "justin">
                <Avatar id ="avatar"alt="littlej.jpg" src={littlej}/>
                <div className="row" >
                    <div className="col s12 m4 offset-l4">
                        <p id = "note" >
                            Happy Birthday Mom. I love you and hope you have a wonderful weekend at the beach!
                        </p>
                   </div>
                   <ReactPlayer url='https://youtu.be/u2XxXW3kO8E' playing width="80" height="30%" className="col s12 m4 offset-l4"/>
               </div>
            </div>
        )
    }
}
export default Justin