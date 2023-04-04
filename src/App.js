import React from 'react'
import { ThemeContext, themes } from './components/ThemeSwitcher'
import Twitter from './components/TwitterPage/Twitter'

function App() {
	return (
		<ThemeContext.Provider value={themes.primary}>
			<Twitter />
		</ThemeContext.Provider>
	)
}

export default App
