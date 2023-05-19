import React from 'react'
import './App.css'
export default function ProfileCard({Id, P_url, Name, Email, Message}) {
  return (
    <div>
        <div className="maincontainer">
            <img src={P_url} alt="IMG" />
            <h3>Id: {Id?Id:""}</h3>
            <h2>Name: {Name? Name: ""}</h2>
            <h3>Email: {Email? Email: ""}</h3>
            <p><b>Message:</b> {Message? Message: ""}</p>
        </div>
    </div>
  )
}
