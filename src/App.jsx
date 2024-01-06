import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";

const App = () => {
	const H1 = styled.h1`
		font-size: 30px;
		color: blue;
	`;

	const StyledApp = styled.div`
		background: orangered;
		padding: 1.2rem 1.6rem;
	`;
	return (
		<>
			<GlobalStyles />
			<StyledApp>
				<H1>Wild Oasis</H1>
				<Button>Click Me</Button>
			</StyledApp>
		</>
	);
};
export default App;
