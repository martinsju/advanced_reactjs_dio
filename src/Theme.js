import { createContext } from 'react'

export const themes = {
	primary: {
		background: '#0C1A1D',
		color: '#efefef'
	},
	secondary: {
		background: '#efefef',
		color: '#0C1A1D'
	}
}

export const ThemeContext = createContext(themes.primary)
