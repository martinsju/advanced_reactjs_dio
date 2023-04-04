import React, { useContext, useState, useEffect } from 'react'
import { ThemeContext } from '../ThemeSwitcher'
import styled from 'styled-components'

const TwitterCard = styled.div`
	background-color: #f7f7f7;
	color: #000;

	font-family: sans-serif;
	font-size: 18px;
	min-width: 30%;
	max-width: 60%;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 20px;
	margin: auto;
	padding: 15px;

	button {
		background-color: #00d2ff;
		color: #000;
		outline: none;
		border: 1px solid #00d2ff;
		padding: 8px;
		width: fit-content;
	}
`

function Twitter(props) {
	//we dont have to call props anymore at every function
	const theme = useContext(ThemeContext)

	const [tweet, setTweet] = useState({
		content: 'this is my tweet content',
		author: 'Julia Agra'
	})
	// state = {
	// 	tweet: true
	// }

	useEffect(() => {
		return () => {}
	}, [])

	//componentDidMount and componentDidUpdate can be replaced by useEffect hook
	// componentDidMount() {
	// 	const { posts, loading } = this.props
	// 	console.log('componentDidMount Twitter', posts)
	// 	console.log('componentDidMount loading: ', loading)
	// }

	// componentDidUpdate() {
	// 	const { loading } = this.props
	// 	console.log('componentDidUpdate Twitter loading: ', loading)
	// }

	//componentDidUnmount can be called at return inside useEffect hook
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
		<TwitterCard>
			<div>this is my Twitter functional component</div>
			<button>Change Theme</button>
		</TwitterCard>
	)
}

export default Twitter
