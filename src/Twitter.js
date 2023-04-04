import React, { Component } from 'react'

class Twitter extends Component {
	state = {
		tweet: true
	}

	componentDidMount() {
		const { posts, loading } = this.props
		console.log('componentDidMount Twitter', posts)
		console.log('componentDidMount loading: ', loading)
	}

	componentDidUpdate() {
		const { loading } = this.props
		console.log('componentDidUpdate Twitter loading: ', loading)
	}

	componentWillUnmount() {
		const { loading } = this.props
		console.log('componentWillUnmount Twitter loading: ', loading)
	}

	shouldComponentUpdate(nextProps, nextState) {
		//anything I want the component to re-render
		// return this.state.tweet !== nextState.tweet
		return false
	}

	render() {
		return <div>this is my Twitter class component </div>
	}
}

export default Twitter
