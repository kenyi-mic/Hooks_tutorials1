import React, {useState} from 'react'
import './App.css'

function HookState() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    
    function handleNameChange(e){
     setName(e.target.value);
    }

    function handleEmailChange(e){
        setEmail(e.target.value);
    }

    function handleMessageChange(e){
        setMessage(e.target.value);
    }

    function handleSubmit(e){
        e.preventDefault();
        alert('Sucess')
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <fieldset>
                <legend className="contact-info" >Contact Us</legend>
                <legend className="name" >Name</legend>
                <input  className="name-input" type="text" value={name} onChange={handleNameChange} />
                <br/>
                <legend className="email" >Email</legend>
                <input  className="email-input" type="email" value={email} onChange={handleEmailChange}/>
                <br/>
                <legend className="message" >Message</legend>
                <textarea className="message-input"  name="message" value={message} onChange={handleMessageChange}/>
            </fieldset>
            <input  className="submit-btn" type="submit" value="Submit"/>
        </form>

    )
}

export default HookState
