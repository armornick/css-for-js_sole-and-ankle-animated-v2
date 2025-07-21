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
	--transition-time: 200ms; /* to synchronize both animations */

	font-size: 1.125rem;
	text-transform: uppercase;
	text-decoration: none;
	color: var(--color-gray-900);
	font-weight: ${WEIGHTS.medium};

	position: relative;
	overflow: hidden;

	&:first-of-type,
	&:where(:hover, :focus) {
		color: var(--color-secondary);
	}
`;

const MainText = styled.span`
	@media (hover: hover) and (prefers-reduced-motion: no-preference) {
		transition: transform var(--transition-time);
		display: inline-block; /* inline elements can't be animated */

		${Wrapper}:hover > & {
			transform: translateY(-100%);
		}
	}
`;

const HoverText = styled.span`
	position: absolute;
	left: 0;
	font-weight: ${WEIGHTS.bold};

	@media (hover: hover) and (prefers-reduced-motion: no-preference) {
		transition: transform var(--transition-time);
		transform: translateY(100%);

		${Wrapper}:hover > & {
			transform: translateY(0%);
		}
	}
`;

export default NavLink;
