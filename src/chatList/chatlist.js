import React, { Component }  from 'react';
import ReactDOM from 'react-dom';
import './chatlist.css';
//import { super } from '@babel/types';
//import Pusher from "pusher-js";
//import './messagebox.css';
//import axios from 'axios';

class ChatList extends React.Component{
    constructor(props)
    {
        super(props)
        this.state={listitems:props.chatitems}
    }
    render(){
        return(
            <div id="mySidenav" className="sidenav">
            <div className="img-container">
            <div><img className="channelpic" src={require('./images/channelpic.png')}/> </div>
            <div className="bottom-right">ReactJs Channel</div>
            </div>
        {this.state.listitems.map((listitem) => (
         <a href="#">{listitem.title}</a>
        ))}
        
            
</div>


        );
    }
}
export default ChatList