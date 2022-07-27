import React, { Component } from "react";
import "./rightSideFooter.css";
import {BsEmojiSmile} from "react-icons/bs";
import {FaMicrophone} from "react-icons/fa";
import {ImAttachment} from "react-icons/im";
// import {BsCheck2,BsCheck2All} from "react-icons/bs";
export class RightSideFooter extends Component{

    render(){
        return(
            <div id="rightSideFooter">
                <ul id="rightSideFooter_ul">
                    <li><BsEmojiSmile size="1.4em"/></li>
                    <li><ImAttachment size="1.4em"/></li>
                    <li id="rightSideFooter_ulInput">
                        <input type="text" placeholder="Type a message"/>
                    </li>
                    <li><FaMicrophone size="1.4em"/></li>
                </ul>
            </div>
        );
    }
}