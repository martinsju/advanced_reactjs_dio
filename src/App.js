import React from 'react'
import { ThemeContext, themes } from './Theme'
import Twitter from './Twitter'

function App() {
	return (
		<ThemeContext.Provider value={themes.primary}>
			<Twitter />
		</ThemeContext.Provider>
	)
}

export default App
