// import React and ReactDOM. notice that these are capitalzee and not a relative path
// here it will look to our package.json file and check for a dependency called 'react' or 'react-dom', if it finds them it will grab that required code from our node_modules folder
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

// here we are attaching our App component to an element with and ID of root. That element can be found ins /public/index.html
ReactDOM.render(<App />, document.getElementById('root'))
