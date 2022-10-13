import React from "react";
import "./rightSideHeader.css";
import profile from "../../../resources/profile.jpg"; 
import {BsSearch,BsThreeDotsVertical} from "react-icons/bs";

export class RightSideHeader extends React.Component{

    render(){
        return(
            <div id="rightSideHeader">
                <span><img src={profile} alt="" /></span>
                <p>Aurore</p>
                <ul>
                    <li><BsSearch size="1.5em"/></li>
                    <li><BsThreeDotsVertical size="1.5em"/></li>
                </ul>
            </div>
        );
    }
}