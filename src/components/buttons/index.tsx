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
}
interface AnchorProps extends Props {
  href: string
  variants?: Variants
  disabled?: boolean
}
interface ButtonProps extends Props {
  type: 'button' | 'submit'
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
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

const StyledAnchor = styled(motion.a)<AnchorProps>`
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

const StyledButton = styled(motion.button)<ButtonProps>`
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

const Anchor = ({
  children,
  bg,
  text,
  icon,
  w,
  border,
  href,
  variants,
  disabled
}: AnchorProps): JSX.Element => {
  return (
    <StyledAnchor
      href={href}
      target='_blank'
      bg={bg}
      text={text}
      w={w}
      border={border}
      variants={variants}
      disabled={disabled}
      onClick={e => {}}
    >
      <span>{children}</span>
      <img src={icon} />
    </StyledAnchor>
  )
}

const Button = ({
  children,
  bg,
  text,
  icon,
  w,
  border,
  onClick,
  type = 'button'
}: ButtonProps): JSX.Element => {
  return (
    <StyledButton
      type={type}
      onClick={onClick}
      bg={bg}
      text={text}
      w={w}
      border={border}
      variants={buttonVariants}
    >
      <span>{children}</span>
      <img src={icon} />
    </StyledButton>
  )
}

export { Anchor, Button }
