import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Heading from "./ui/Heading";

const App = () => {
	const StyledApp = styled.div`
		background: orangered;
		padding: 1.2rem 1.6rem;
	`;
	return (
		<>
			<GlobalStyles />
			<StyledApp>
				<Heading as="h1">Wild Oasis</Heading>
				<Heading as="h2">Form</Heading>
				<Heading as="h3">Check in</Heading>
				<Button>Click Me</Button>
			</StyledApp>
		</>
	);
};
export default App;
