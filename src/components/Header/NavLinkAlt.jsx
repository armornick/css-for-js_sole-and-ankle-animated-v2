import React from "react";
import styled from "styled-components";

import { WEIGHTS } from "../../constants";

const NavLink = ({ children, ...delegated }) => {
	return (
		<Wrapper {...delegated}>
			<MainText>{children}</MainText>
			<HoverText aria-hidden={true}>{children}</HoverText>
		</Wrapper>
	);
};

const Wrapper = styled.a`
	font-size: 1.125rem;
	text-transform: uppercase;
	text-decoration: none;
	color: var(--color-gray-900);
	font-weight: ${WEIGHTS.medium};

	position: relative;
	overflow-x: clip;

	&:first-of-type {
		color: var(--color-secondary);
	}
`;

const MainText = styled.span`
	@media (hover: hover) and (prefers-reduced-motion: no-preference) {
		transition: opacity 300ms;
		display: inline-block; /* inline elements can't be animated */

		${Wrapper}:hover > & {
			opacity: 0;
		}
	}
`;

const HoverText = styled.span`
	position: absolute;
	left: 0;
	color: var(--color-secondary);
	border-bottom: 3px solid var(--color-secondary);
	transform: translateX(-100%);

	@media (hover: hover) and (prefers-reduced-motion: no-preference) {
		transition: transform 400ms;

		${Wrapper}:hover > & {
			transform: translateX(0%);
		}
	}
`;

export default NavLink;
