import React, { Component } from 'react'
import './App.css'

export default class ClassStates extends Component {
    constructor(props) {
        super(props)
        this.state={
            name: '',
            email: '',
            message: '',
        }
        this.handleEmailChange = this.handleEmailChange.bind(this)
        this.handleNameChange = this.handleNameChange.bind(this)
        this.handleMessageChange = this.handleMessageChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }


    handleSubmit(event){
        event.preventDefault()
        alert(`Success.`)
    }

    handleNameChange(e){
        this.setState({name: e.target.value})
    }

    handleEmailChange(e){
        this.setState({email: e.target.value})
    }

    handleMessageChange(e) {
        this.setState({message: e.target.value})
    }

    render() {
        const name = this.state.name
        const email = this.state.email
        const message = this.state.message
        return (
            <form className="form" onSubmit={this.handleSubmit}>
                <fieldset>
                    <legend className="contact-info">Contact Us</legend>
                    <legend className="name">Name:</legend>
                    <input className="name-input" type="text" value={name} onChange={this.handleNameChange}/>
                    <br/>
                    <legend className="email">Email:</legend>
                    <input className="email-input" type="email" value={email} onChange={this.handleEmailChange}/>
                    <br/>
                    <legend className="message">Message:</legend>
                    <textarea className="message-input" type="text" value={message} onChange={this.handleMessageChange}/>
                </fieldset>
                <input className="submit-btn" type="submit" value="Submit"/>
            </form>

        )
    }
}
