import React, { Component } from "react";
import "./leftSideHeader.css";
import {TbCircleDashed,TbMessage} from "react-icons/tb";
import {BsThreeDotsVertical,BsFilter} from "react-icons/bs";
import {IoIosSearch,IoIosNotificationsOff} from "react-icons/io";
// import {AiOutlineArrowLeft} from "react-icons/ai";
import profile from "../../../resources/profile.jpg"; 



export class LeftSideHeader extends Component{

    render(){
        return(
            <div>
                <header id="leftSideHeader_header">
                    <span ><img src={profile} alt="" /></span>
                    <ul id="leftSideHeader_ul">
                        <li><TbCircleDashed size="1.5rem"/></li>
                        <li><TbMessage size="1.5rem"/></li>
                        <li><BsThreeDotsVertical size="1.5rem"/></li>
                    </ul>
                </header>    
                <section id="leftSideHeader_two">
                    <div id="notification_icon">
                        <IoIosNotificationsOff/>
                    </div>
                    <div id="notification_header">
                        <h1>Get notified of new messages</h1>
                        <p><a href="/">Turn on the desktop notifications</a> </p>
                    </div>
                </section>
                <section id="leftSideHeader_three">
                    <div>
                        <IoIosSearch id="searchIcon"/>
                        <input type="text" placeholder="Search or start new chat"/>
                    </div>
                    <span><BsFilter/></span>
                </section>
            </div>
        );
            
        
    }
}