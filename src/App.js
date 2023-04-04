import React, { Component } from 'react'
import Twitter from './Twitter'

class App extends Component {
	state = {
		loading: false,
		actived: true
	}

	componentDidMount() {
		console.log('componentDidMount App')
		setTimeout(() => {
			this.setState({
				loading: true
			})
		}, 2000)
	}

	componentDidUpdate() {
		console.log('componentDidUpdate App')
	}

	componentWillUnmount() {
		console.log('componentWillUnmount App')
	}

	onRemove = () => {
		this.setState({
			actived: false
		})
	}

	onRecover = () => {
		this.setState({
			actived: true
		})
	}

	render() {
		const posts = [
			{
				content: 'lalala',
				date: '03/04/2023'
			},
			{
				content: 'lalala',
				date: '03/04/2023'
			}
		]

		return (
			<div>
				{this.state.actived && (
					<Twitter posts={posts} loading={this.state.loading} />
				)}
				<button onClick={this.onRemove}>Remove component</button>
				<button onClick={this.onRecover}>Recover component</button>
			</div>
		)
	}
}

export default App
