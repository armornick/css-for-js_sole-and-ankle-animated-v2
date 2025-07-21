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
						<NavLink style={{ "--nav-link-index": 0 }} href="/sale">
							Sale
						</NavLink>
						<NavLink style={{ "--nav-link-index": 1 }} href="/new">
							New&nbsp;Releases
						</NavLink>
						<NavLink style={{ "--nav-link-index": 2 }} href="/men">
							Men
						</NavLink>
						<NavLink
							style={{ "--nav-link-index": 3 }}
							href="/women"
						>
							Women
						</NavLink>
						<NavLink style={{ "--nav-link-index": 4 }} href="/kids">
							Kids
						</NavLink>
						<NavLink
							style={{ "--nav-link-index": 5 }}
							href="/collections"
						>
							Collections
						</NavLink>
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
		--slide-in-time: 500ms;
		animation: ${slideAndFadeIn} var(--slide-in-time)
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

	@media (prefers-reduced-motion: no-preference) {
		transition: opacity 100ms;
		transition-delay: calc(
			var(--slide-in-time) + 100ms * var(--nav-link-index)
		);

		@starting-style {
			opacity: 0;
		}
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
