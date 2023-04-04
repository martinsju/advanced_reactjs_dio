import React, { useState, useEffect } from 'react'
import { ThemeContext, themes } from './components/ThemeSwitcher'
import Twitter from './components/TwitterPage/Twitter'

function App() {
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

	const [loading, setLoading] = useState(false)

	useEffect(() => {
		setLoading(true)
		setTimeout(() => {
			setLoading(false)
		}, 3000)
		console.log('useeffect do app rodou e loading é ', loading)
	}, [])

	return (
		<ThemeContext.Provider value={themes.primary}>
			<Twitter posts={posts} loading={loading} />
			<p>load: {loading.toString()}</p>
			<button>[unabled] Remove Tweet</button>
			<button>[unabled] Recover Tweet</button>
		</ThemeContext.Provider>
	)
}

export default App
