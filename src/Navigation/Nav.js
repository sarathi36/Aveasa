import React from "react";
import './Nav.css';
import { StickyContainer, Sticky } from 'react-sticky';
import logo from './navimages/logo.png';
import diamond from './navimages/dia.png';
import Header from "./nav2";
import { NavLink } from "react-router-dom";
function Navigation(){
    return(
        <>
       
        <nav style={{position:'sticky',top:'0%'}}>
            <div className="main"  style={{position:'sticky',top:'0%'}}>
                <div>
                    <NavLink to='/Home'>
                    <img src={logo}  width={100}/>
                    </NavLink>
               
                </div>
                <div id="collection">
                 <img src={diamond} width={100} />
                 <p>TRENDY COLLECTIONS</p>
                </div>
                <div>
                    <input placeholder="Search anything"></input>
                </div>
               <div>
                <p>Express Delivary</p>
               </div>
               <div id="login">
                <NavLink to='/Signin'>
                <li><a>Sign in</a> </li>
                </NavLink>
              
                <p>Sign out</p>
               </div>
              
 
            </div>
            <div className="navigation" >
                <div >
                    <NavLink to='/'>
                    <li ><p>Home </p></li>
                    </NavLink>
                    
                    <NavLink to='/Maincollections'>
                    <li><p>Collections </p></li>
                    </NavLink>
                    <NavLink to='/Mainevents'>
                    <li><p>Events </p></li>
                    </NavLink>
                    <NavLink to='/Mainvideo'>
                    <li><p>Videos </p></li>
                    </NavLink>
                   
                    <li><p>About us </p></li>
                    <li><p>Info </p></li>
                    
                   
                </div>
            </div>
       </nav>
      
       
           
       
        </>
    )
}

export default Navigation;