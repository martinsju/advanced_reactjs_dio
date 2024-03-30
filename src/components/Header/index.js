import { ThemeSwitcher } from '../ThemeSwitcher'
import styled from 'styled-components'

const Container = styled.div`
	background: ${(props) => props.theme.colors.primary};
	color: ${(props) => props.theme.colors.color};
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 15px;
	margin-bottom: 20px;

	p {
		font-size: 12px;
	}
`
const ThemeSwitcherBlock = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 5px;
`

function Header({ toggleTheme, theme }) {
	return (
		<Container>
			<h3>this is my Header</h3>
			<ThemeSwitcherBlock>
				<p>Theme: {theme.title}</p>
				<ThemeSwitcher toggleTheme={toggleTheme} />
			</ThemeSwitcherBlock>
		</Container>
	)
}

export default Header
