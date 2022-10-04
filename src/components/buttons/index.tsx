import { motion, Variants } from 'framer-motion'
import styled from 'styled-components'

type children = string | JSX.Element[]

interface Props {
  children: children
  bg?: string
  text?: string
  icon?: string
  border?: string
  w?: string
  onClick?: () => void
}
interface AnchorProps extends Props {
  href: string
  type?: string
  variants?: Variants
  disabled?: boolean
}
interface NavLinkProps extends Props {
  onClick: () => void
}

const buttonVariants: Variants = {
  initial: { y: -100, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.4
    }
  }
}

const StyledButton = styled(motion.a)<AnchorProps>`
  background-color: ${({ bg, theme }) =>
    bg !== undefined ? bg : theme.btn};
  color: ${({ text, theme }) =>
    text !== undefined ? text : theme.white};
  border: ${({ border }) =>
    border !== undefined && `1px solid ${border}`};
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 12px;
  border-radius: 1rem;
  width: ${({ w }) => (w !== undefined ? w : '12.5rem')};
  cursor: default;

  & span {
    font-size: 16px;
    letter-spacing: 0.01em;
  }
  & img {
    width: 22px;
    height: 22px;
    color: ${({ text, theme }) =>
      text !== undefined ? text : theme.white};
  }
`

const StyledNavLink = styled(motion.button)<NavLinkProps>`
  background-color: ${({ bg, theme }) =>
    bg !== undefined ? bg : theme.btn};
  color: ${({ text, theme }) =>
    text !== undefined ? text : theme.white};
  border: ${({ border }) =>
    border !== undefined && `1px solid ${border}`};
  height: 3rem;
  display: flex;

  justify-content: center;
  align-items: center;
  column-gap: 12px;
  border-radius: 1rem;
  width: ${({ w }) => (w !== undefined ? w : '12.5rem')};
  cursor: default;

  & span {
    font-size: 16px;
    letter-spacing: 0.01em;
  }
  & img {
    width: 22px;
    height: 22px;
    color: ${({ text, theme }) =>
      text !== undefined ? text : theme.white};
  }
`

const AnchorButton = ({
  children,
  bg,
  text,
  icon,
  w,
  border,
  href,
  type,
  variants,
  disabled
}: AnchorProps): JSX.Element => {
  return (
    <StyledButton
      type={type}
      href={href}
      target={
        type === 'submit' || type === 'button'
          ? '_self'
          : '_blank'
      }
      bg={bg}
      text={text}
      w={w}
      border={border}
      variants={variants}
      disabled={disabled}
    >
      <span>{children}</span>
      <img src={icon} />
    </StyledButton>
  )
}

const NavLinkButton = ({
  children,
  bg,
  text,
  icon,
  w,
  border,
  onClick
}: NavLinkProps): JSX.Element => {
  return (
    <StyledNavLink
      bg={bg}
      text={text}
      w={w}
      border={border}
      onClick={onClick}
      variants={buttonVariants}
    >
      <span>{children}</span>
      <img src={icon} />
    </StyledNavLink>
  )
}

export { AnchorButton, NavLinkButton }
