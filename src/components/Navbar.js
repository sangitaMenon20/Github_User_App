import React from 'react';
import styled from 'styled-components';


const Navbar = () => {
	return (
		<Wrapper>
			<h2>GitHub User Information</h2>
		</Wrapper>
	);
};

const Wrapper = styled.nav`
	padding: 1.5rem;
	margin-bottom: 4rem;
	background: var(--clr-white);
	display: grid;
	grid-template-columns: auto auto 100px;
	justify-content: center;
	align-items: center;
	gap: 1.5rem;
	h2 {
		margin-bottom: 0;
		font-weight: 800;
        color:white;
		text-align: center;
		align-items: center;

	}
	
`;

export default Navbar;