import React from 'react'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import { withStyles } from '@material-ui/core/styles';
import littleme from '../littleme.jpg'
import littlej from '../littlej.jpg'
import littlenee from '../littlenee.jpg'
import { Avatar } from '@material-ui/core';

const styles = {
    list: {
      width: 300,
      background:'#e7dda2d0 '
        },
    link: {
        height:300,
        background:'#2c5f6dbd'
        } 
  };
class Nav extends React.Component{
    state = {
        top: false,
        left: false,
        bottom: false,
        right: false,
    }
    toggleDrawer = (side, open) => () => {
        this.setState({
          [side]: open,
        });
      };
    render(){
        const { classes } = this.props;
        const sideList = (            
            <div className={classes.list}>
              <List > 
                  <ListItem button id = "theme"><a href ="/"><b>Home</b></a>
                  </ListItem>
                  <Divider></Divider>
                  <a href ="/Renee">
                  <ListItem button  className={classes.link} >
                    <Avatar id ="avatar"alt="littleme.jpg" src={littlenee}/>
                    <b>Renee</b> 
                  </ListItem></a> 
                  <a href ="/Christian"><ListItem button  className={classes.link} ><Avatar id ="avatar"alt="littleme.jpg" src={littleme}/><b>Christian</b>
                  </ListItem></a>
                  <a href ="/Justin"><ListItem button className={classes.link} ><Avatar id ="avatar"alt="littleme.jpg" src={littlej}/><b>Justin</b> 
                  </ListItem></a>
              </List>
            </div>
            )
        return (
            <div id="bar">
                <IconButton style ={{padding:0, width:400, }}  color="inherit" aria-label="Menu">
                    <MenuIcon id="menu" onClick={this.toggleDrawer('left', true)} />
                </IconButton>
                <SwipeableDrawer
                    open={this.state.left}
                    onClose={this.toggleDrawer('left', false)}
                    onOpen={this.toggleDrawer('left', true)}
                >
                {sideList}
                </SwipeableDrawer>          
            </div>
        )
    }
}
Nav.propTypes = {
    classes: PropTypes.object.isRequired,
  };
export default withStyles(styles)(Nav)