import logo from './logo.svg';
import './App.css';
import TitleBar from './titlebar'
import MessageBox from './messagebox'
import ChatListContainer from './chatList/chatlistcontianer'
import React, { Component }  from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TitleBar title="onChainLabs"/>
        <ChatListContainer/>
        <MessageBox/>
      </header>
    </div>
  );
}

export default App;
