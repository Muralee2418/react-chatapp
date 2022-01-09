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
        this.state={chatitems:props.chatitems}
    }
    render(){
        return(
            <div id="mySidenav" className="sidenav">
            
        {this.state.chatitems.map((chatitem) => (
         <a href="#">{chatitem.title}</a>
        ))}
        
            
</div>


        );
    }
}
export default ChatList