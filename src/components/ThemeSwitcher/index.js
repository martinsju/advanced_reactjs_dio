import React, { useContext } from 'react'
import Switch from 'react-switch'
import { ThemeContext } from 'styled-components'

export function ThemeSwitcher({ toggleTheme }) {
	const theme = useContext(ThemeContext)

	console.log(theme.title)
	return (
		<Switch
			onChange={toggleTheme}
			checked={theme.title === 'Dark'}
			checkedIcon={false}
			uncheckedIcon={false}
			height={5}
			width={25}
			handleDiameter={10}
			offColor='#333'
			onColor='#fff'
		/>
	)
}
