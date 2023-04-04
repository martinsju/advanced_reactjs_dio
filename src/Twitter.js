import React, { useContext } from 'react'
import { ThemeContext } from './Theme'

function Twitter() {
	const theme = useContext(ThemeContext)
	// state = {
	// 	tweet: true
	// }

	// componentDidMount() {
	// 	const { posts, loading } = this.props
	// 	console.log('componentDidMount Twitter', posts)
	// 	console.log('componentDidMount loading: ', loading)
	// }

	// componentDidUpdate() {
	// 	const { loading } = this.props
	// 	console.log('componentDidUpdate Twitter loading: ', loading)
	// }

	// componentWillUnmount() {
	// 	const { loading } = this.props
	// 	console.log('componentWillUnmount Twitter loading: ', loading)
	// }

	// shouldComponentUpdate(nextProps, nextState) {
	// 	//anything I want the component to re-render
	// 	// return this.state.tweet !== nextState.tweet
	// 	return false
	// }

	return (
		<div style={{ background: theme.background, color: theme.color }}>
			this is my Twitter functional component
			<button style={{ backgroundColor: theme.background, color: theme.color }}>
				Change Theme
			</button>
		</div>
	)
}

export default Twitter
