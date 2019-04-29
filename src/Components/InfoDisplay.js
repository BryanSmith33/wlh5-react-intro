// importing react to make use of JSX
// we are also destructuring Component from 'react'. this allows us to extend the functionality of our custom component
import React, { Component } from 'react'

// setting up our component
class InfoDisplay extends Component {
	//where we can set our state, which is just default data for our component
	constructor() {
		// we will learn more about super in the future. For now, just know that we absolutely need it
		super()
		// setting our initial state
		// remember, state is just an object
		this.state = {
			name: 'Bryan Smith',
			employer: 'DevMountain',
			hobbies: ['lawn care', 'skateboarding', 'home renovation'],
			newHobby: ''
		}
		// binding this in our handleHobbyUpdate method
    this.handleHobbyUpdate = this.handleHobbyUpdate.bind(this)
	}

	// custom method
	handleHobbyUpdate(e) {
		console.log(e.target.value)
		// here we are updating the newHobby property on state with the value from e.target.value which is whatever we type into our input below
    this.setState({
      newHobby: e.target.value
    })
  }
	
	// custom method
  handleAddHobby(){
		// creating a copy of hobbies on state because state should be immutable or meaning that we should not update it directly
		const hobbyCopy = this.state.hobbies.slice()
		// adding whatever the value of newHobby on state is to the hobbyCopy array
		hobbyCopy.push(this.state.newHobby)
		// setting our new hobbyCopy on state
    this.setState({
      hobbies: hobbyCopy,
      newHobby: ''
    })
  }

	render() {
		// this is all javascript land. anything we can do in javascript, we can do between render() and return
		// here we are mapping over our hobbies on state and dynamically creating an <li></li> with its value being the singular value of each hobby
		// we need a key whenever we dynamically create something with React so react can manage it efficiently on the virtual dom
		const hobbies = this.state.hobbies.map((hobby, index) => {
			return <li key={index}>{hobby}</li>
		})
		return (
			// rendering our jsx
			<div>
				<h1>{this.state.name}</h1>
				<p>I work at {this.state.employer}</p>
				<ul>{hobbies}</ul>
				<input
					type='text'
					value={this.state.newHobby}
					onChange={this.handleHobbyUpdate}
				/>
				{/* here we use an onclick event listener. anytime our button is clicked, we run the handleAddHobby method. Here we are binding with an arrow function which will do about the same thing as the this.handleHobbyUpdate = this.handleHobbyUpdate.bind(this) route above */}
				<button onClick={() => this.handleAddHobby()}>Add Hobby</button>
			</div>
		)
	}
}

export default InfoDisplay
