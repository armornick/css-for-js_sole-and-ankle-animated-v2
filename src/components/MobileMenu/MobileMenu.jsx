import React from "react";
import styled, { keyframes } from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";

import { QUERIES, WEIGHTS } from "../../constants";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const MobileMenu = ({ isOpen, onDismiss }) => {
	return (
		<Dialog.Root open={isOpen} onOpenChange={onDismiss}>
			<Dialog.Portal>
				<Overlay />
				<Content>
					<CloseButton onClick={onDismiss}>
						<Icon id="close" />
						<VisuallyHidden>Dismiss menu</VisuallyHidden>
					</CloseButton>
					<VisuallyHidden>
						<Dialog.Title>Mobile navigation</Dialog.Title>
						<Dialog.Description>
							Mobile navigation
						</Dialog.Description>
					</VisuallyHidden>
					<Filler />
					<Nav>
						<NavLink href="/sale">Sale</NavLink>
						<NavLink href="/new">New&nbsp;Releases</NavLink>
						<NavLink href="/men">Men</NavLink>
						<NavLink href="/women">Women</NavLink>
						<NavLink href="/kids">Kids</NavLink>
						<NavLink href="/collections">Collections</NavLink>
					</Nav>
					<Footer>
						<SubLink href="/terms">Terms and Conditions</SubLink>
						<SubLink href="/privacy">Privacy Policy</SubLink>
						<SubLink href="/contact">Contact Us</SubLink>
					</Footer>
				</Content>
			</Dialog.Portal>
		</Dialog.Root>
	);
};

const Overlay = styled(Dialog.Overlay)`
	position: fixed;
	inset: 0;
	background: var(--color-backdrop);

	transition: opacity 400ms;
	@starting-style {
		opacity: 0;
	}
`;

const slideAndFadeIn = keyframes`
  0% {
    transform: translateX(100%);
  }

  100% {
    transform: translateX(0%);
  }
`;

const Content = styled(Dialog.Content)`
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	background: white;
	width: 300px;
	height: 100%;
	padding: 24px 32px;
	display: flex;
	flex-direction: column;

	@media (prefers-reduced-motion: no-preference) {
		animation: ${slideAndFadeIn} 500ms
			cubic-bezier(0.95, 0.05, 0.795, 0.035); /* easeInExpo */
	}
`;

const CloseButton = styled(UnstyledButton)`
	position: absolute;
	top: 10px;
	right: 0;
	padding: 16px;
`;

const Nav = styled.nav`
	display: flex;
	flex-direction: column;
	gap: 16px;
`;

const NavLink = styled.a`
	color: var(--color-gray-900);
	font-weight: ${WEIGHTS.medium};
	text-decoration: none;
	font-size: 1.125rem;
	text-transform: uppercase;

	&:first-of-type {
		color: var(--color-secondary);
	}
`;

const Filler = styled.div`
	flex: 1;
`;
const Footer = styled.footer`
	flex: 1;
	display: flex;
	flex-direction: column;
	gap: 14px;
	justify-content: flex-end;
`;

const SubLink = styled.a`
	color: var(--color-gray-700);
	font-size: 0.875rem;
	text-decoration: none;
`;

export default MobileMenu;
