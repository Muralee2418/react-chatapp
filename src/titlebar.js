import React, { Component }  from 'react';
import './titlebar.css';
//import { super } from '@babel/types';
class TitleBar extends React.Component{
    constructor(props)
    {   
        super(props)
        this.state={title:props.title}
    }
    render()
    {
        return(
            <div className="titlebar">
            <h5>{this.state.title}</h5>
            </div>
        )
    }
}
export default TitleBar