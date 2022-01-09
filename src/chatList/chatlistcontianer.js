import React, { Component }  from 'react';
import ReactDOM from 'react-dom';
import ChatList from "./chatlist"
//import { super } from '@babel/types';
class ChatListContainer extends React.Component{
    constructor(props)
    {
        super(props)
        this.state={chatitems:[{"title":"Welcome","chats":"The Channel welomes you all"},
        {"title":"Announcement","chats":"Reactjs is a front end framework"},
        {"title":"#Directory","chats":"React js is a front end library"},
        {"title":"#Introductions","chats":"Angularjs is a front end framework"},
        {"title":"learn-angular","chats":"Angularjs is a front end framework"},
    
    ]}
    }

    render(){
        return(
            <ChatList chatitems={this.state.chatitems}/>
        )
    }

}
export default ChatListContainer
