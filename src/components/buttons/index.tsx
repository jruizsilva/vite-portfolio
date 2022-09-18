import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

type children = string | JSX.Element[]

interface Props {
  children: children
  bg?: string
  text?: string
  icon?: string
  border?: string
  w?: string
}
interface AnchorProps extends Props {
  href: string
  type?: string
}
interface NavLinkProps extends Props {
  to: string
}

const StyledButton = styled('a')<AnchorProps>`
  background-color: ${({ bg, theme }) => (bg !== undefined ? bg : theme.btn)};
  color: ${({ text, theme }) => (text !== undefined ? text : theme.white)};
  border: ${({ border }) => border !== undefined && `1px solid ${border}`};
  height: 3rem;
  display: flex;

  justify-content: center;
  align-items: center;
  column-gap: 12px;
  border-radius: 1rem;
  width: ${({ w }) => (w !== undefined ? w : '12.5rem')};

  & span {
    font-size: 16px;
    letter-spacing: 0.01em;
  }
  & img {
    width: 22px;
    height: 22px;
    color: ${({ text, theme }) => (text !== undefined ? text : theme.white)};
  }
`

const StyledNavLink = styled(NavLink)<NavLinkProps>`
  background-color: ${({ bg, theme }) => (bg !== undefined ? bg : theme.btn)};
  color: ${({ text, theme }) => (text !== undefined ? text : theme.white)};
  border: ${({ border }) => border !== undefined && `1px solid ${border}`};
  height: 3rem;
  display: flex;

  justify-content: center;
  align-items: center;
  column-gap: 12px;
  border-radius: 1rem;
  width: ${({ w }) => (w !== undefined ? w : '12.5rem')};

  & span {
    font-size: 16px;
    letter-spacing: 0.01em;
  }
  & img {
    width: 22px;
    height: 22px;
    color: ${({ text, theme }) => (text !== undefined ? text : theme.white)};
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
  type
}: AnchorProps): JSX.Element => {
  return (
    <StyledButton
      type={type}
      href={href}
      target={type === 'submit' ? '_self' : '_blank'}
      bg={bg}
      text={text}
      w={w}
      border={border}
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
  to
}: NavLinkProps): JSX.Element => {
  return (
    <StyledNavLink to={to} bg={bg} text={text} w={w} border={border}>
      <span>{children}</span>
      <img src={icon} />
    </StyledNavLink>
  )
}

export { AnchorButton, NavLinkButton }
