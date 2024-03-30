import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const Container = styled.div``

const TwitterCard = styled.div`
	background-color: ${(props) => props.theme.colors.primary};
	color: ${(props) => props.theme.colors.color};

	font-family: sans-serif;
	font-size: 18px;
	min-width: 30%;
	max-width: 60%;
	min-height: 120px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 20px;
	margin: auto;
	padding: 15px;

	button {
		background-color: ${(props) => props.theme.colors.secondary};
		color: ${(props) => props.theme.colors.color};
		outline: none;
		border: 1px solid ${(props) => props.theme.colors.secondary};
		padding: 8px;
		width: fit-content;
		cursor: pointer;
	}
`

const ButtonContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	gap: 20px;
`

function Twitter(props) {
	//we dont have to call props anymore at every function

	const { loading } = props
	const [tweet, setTweet] = useState({
		content: 'this is my tweet content',
		author: 'Julia Agra'
	})

	// state = {
	// 	tweet: true
	// }

	useEffect(() => {
		const { posts, loading } = props
		console.log('componentDidMount ', posts)
		console.log('componentDidMount:loading ', loading)
	}, [])

	//componentDidMount and componentDidUpdate can be replaced by useEffect hook

	// componentDidMount() {
	// 	const { posts, loading } = this.props
	// 	console.log('componentDidMount Twitter', posts)
	// 	console.log('componentDidMount loading: ', loading)
	// }

	useEffect(() => {
		if (loading === true) {
			console.log('loading... ', loading)
		} else {
			console.log('done ', loading)
		}
	}, [loading])

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
		<Container>
			<TwitterCard>
				{loading ? (
					<p>loading...</p>
				) : (
					<>
						<div>this is my Twitter functional component</div>
						<ButtonContainer>
							<button>[unabled] Remove Tweet</button>
							<button>[unabled] Recover Tweet</button>
						</ButtonContainer>
					</>
				)}
			</TwitterCard>
		</Container>
	)
}

export default Twitter
