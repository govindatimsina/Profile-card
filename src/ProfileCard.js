import React from 'react'
import './App.css'


export default function ProfileCard({Id, P_url, Name, Email, Message}) {
  return (
    <div>
        <div className="maincontainer">
            <div className="imgcontainer">
               <img src={P_url} alt="IMG" />
            </div>
            <h3>Id: {Id?Id:""}</h3>
            <h2>Name:</h2> <p>{Name? Name: ""}</p>
            <h3>Email:</h3> <p><a href="mailto:{Email}">{Email? Email: ""}</a></p>
            <p><b>Message:</b> {Message? Message: ""}</p>
        </div>
    </div>
  )
}
