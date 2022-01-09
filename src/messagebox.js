import React, { Component }  from 'react';
import ReactDOM from 'react-dom';
import Pusher from "pusher-js";
import './messagebox.css';
import axios from 'axios';


class MessageBox extends React.Component{
    constructor(props){
        super(props)
        this.state={messages:[],
            text:'',
            username:'murali'
    }
    this.handleClick=this.handleClick.bind(this)
    this.handleChange=this.handleChange.bind(this)


    }
    componentDidMount(){
        const pusher = new Pusher('194132d8736033126510', {
            cluster: 'ap2',
            encrypted: true
          });
          const channel = pusher.subscribe('chat');
          channel.bind('message', data => {
            this.setState({ messages: [...this.state.messages, data], test: '' });
          });
    }
    handleChange(e){
        console.log("keycode"+e.keyCode)
        this.setState({ text: e.target.value });
        if(e.keyCode === 13)
        {

        }
        else{
  
        }

    }
    handleClick(e){
     
        console.log("send pressed")
        const payload = {
        username: this.state.username,
        message: this.state.text
      };
      console.log(this.state.text);
      axios.post('http://localhost:5000/message', payload);
            
         
    }

render(){
    return(
    <div className="messagebox">
        <ul className="messages">
        {this.state.messages.map((message) => (
          <li className="message">{message}</li>
        ))}
        </ul>
        <input type="text" placeholder="Type your message.." value={this.state.text} onChange={this.handleChange}/>
        <button className="sendbutton" onClick={this.handleClick}>Send</button>
    </div>);
}

}
export default MessageBox