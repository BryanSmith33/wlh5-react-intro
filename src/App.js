// importing React. Remember, we use React to display our JSX
import React from 'react'
import './App.css'
// importing our custom component from InfoDisplay
import InfoDisplay from './Components/InfoDisplay'

function App() {
	return (
		<div>
			{/* displaying our custom component */}
			<InfoDisplay />
		</div>
	)
}

// exporting App so we can use it in index.js
export default App
