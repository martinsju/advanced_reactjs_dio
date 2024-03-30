import React, { useState, useEffect } from 'react'
import { ThemeContext } from 'styled-components'
import Header from './components/Header'
import Twitter from './components/TwitterCard'
import * as themes from './styles/themes'
import GlobalStyles from './styles/global'
import { ThemeProvider } from 'styled-components'

function App() {
	const [theme, setTheme] = useState(themes.DarkTheme)
	const [posts, setPosts] = useState(
		{
			content: 'this is my tweet content',
			author: 'Julia Agra'
		},
		{
			content: 'this is my tweet content',
			author: 'John Doe'
		}
	)
	const [loading, setLoading] = useState(themes.DarkTheme)

	useEffect(() => {
		setLoading(true)
		setTimeout(() => {
			setLoading(false)
		}, 3000)
		console.log('useeffect do app rodou e loading é ', loading)
	}, [])

	const toggleTheme = () => {
		setTheme(theme.title === 'Dark' ? themes.LightTheme : themes.DarkTheme)
	}

	return (
		// <ThemeContext.Provider value={{ theme, toggleTheme }}>
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<Header toggleTheme={toggleTheme} theme={theme} />
			<Twitter posts={posts} loading={loading} />
		</ThemeProvider>
		// </ThemeContext.Provider>
	)
}

export default App
