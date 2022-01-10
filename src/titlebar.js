import React, { Component }  from 'react';
import './topnavbar.css';
import bell from './title-bar-icons/bell.png'
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
            
            <div class="navbar">
            <a href="#"><i class="fa fa-fw fa-user"></i></a>
            <a href="#"><i class="fa fa-fw fa-envelope"></i></a> 
            <a href="#"><i class="fa fa-fw fa-search"></i></a> 
            <a class="active" href="#">{this.state.title}</a> 
            
            
            
            </div>
            
           
        )
    }
}
export default TitleBar