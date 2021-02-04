import React from 'react';
import { Redirect } from 'react-router-dom';

class StartSession extends React.Component {

  state = {
       email: '',
       password: '',
       loggedIn: false
  }

   handleSubmit = (event) => {
     event.preventDefault()

     let credentials = {email: this.state.email, password: this.state.password}

     fetch('http://localhost:3000/users/sign_in', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
      })
      .then(response => response.json())
      .catch(error => console.log(error))
      .then(user => {
        if (!user) {
          return alert("Sorry, that didn't work! Try again?")
        }

        this.setState = {
          loggedIn: true
        }

     })
   }

   handleChange = (event) => {
     this.setState({
       [event.target.name]: event.target.value
     })
   }

   render() {
     let body;

     if (!!this.state.loggedIn) {
       body = <Redirect to='/expected-date' />
     } else {
       body = <form onSubmit={this.handleSubmit} className='login form'>
         <label>Email: </label>
         <input type='text' value={this.state.email} name='email' onChange={this.handleChange} /><br/>
         <label>Password: </label>
         <input type='password' value={this.state.password} name='password' onChange={this.handleChange} /><br/>
         <input type='submit' className="center-button"/>
       </form>
     }

     return (
         <div>
          {body}
         </div>
     )
   }

}

export default StartSession
