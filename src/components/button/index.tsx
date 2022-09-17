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

const StyledButton = styled('button')<Props>`
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

const Button = ({
  children,
  bg,
  text,
  icon,
  w,
  border
}: Props): JSX.Element => {
  return (
    <StyledButton bg={bg} text={text} w={w} border={border}>
      <span>{children}</span>
      <img src={icon} />
    </StyledButton>
  )
}

export default Button
