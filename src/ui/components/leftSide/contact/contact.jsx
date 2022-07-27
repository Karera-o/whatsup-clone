import React, { Component } from "react";
import "./contact.css";
import profile from "/home/karera/Videos/React/whatsup/src/ui/resources/profile.jpg";

const person1={
    src: profile,
    name:"Peter",
    message:"Hey,do you have the assignment?"
}
const person2={
    src: profile,
    name:"James",
    message:"How are you doing brother"
}
const person3={
    src: profile,
    name:"Aisha Nusla",
    message:"The lecture is coming "
}
const person4={
    src: profile,
    name:"Josh",
    message:"Okay"
}
const person5={
    src: profile,
    name:"Marley",
    message:"It will work as expected"
}
const person6={
    src: profile,
    name:"Sandra",
    message:"longtime"
}

class ContactBluePrint extends Component{

    render(){
        return(
            <div id="contact_content">
                <span><img src={this.props.src} alt="" /></span>
                <div>
                    <h1>{this.props.name}</h1>
                    <p>{this.props.message}</p>
                </div>
            </div>
        );
    }
}

export class Contact extends Component{

    render(){

        return(
            <div id="contacts_holder">
                <ContactBluePrint src={person1.src} name={person1.name} message={person1.message} id="me"/>
                <ContactBluePrint src={person2.src} name={person2.name} message={person2.message}/>
                <ContactBluePrint src={person3.src} name={person3.name} message={person3.message}/>
                <ContactBluePrint src={person4.src} name={person4.name} message={person4.message}/>
                <ContactBluePrint src={person5.src} name={person5.name} message={person5.message}/>
                <ContactBluePrint src={person6.src} name={person6.name} message={person6.message}/>
                <ContactBluePrint src={person1.src} name={person1.name} message={person1.message}/>
                <ContactBluePrint src={person2.src} name={person2.name} message={person2.message}/>
                <ContactBluePrint src={person3.src} name={person3.name} message={person3.message}/>
                <ContactBluePrint src={person4.src} name={person4.name} message={person4.message}/>
                <ContactBluePrint src={person4.src} name={person4.name} message={person4.message}/>
                <ContactBluePrint src={person5.src} name={person5.name} message={person5.message}/>
                <ContactBluePrint src={person6.src} name={person6.name} message={person6.message}/>
                <ContactBluePrint src={person1.src} name={person1.name} message={person1.message}/>
            </div>
        );
        
    }
}