import { motion, Variants } from 'framer-motion'
import styled from 'styled-components'

const StyledTitle = styled(motion.h2)`
  text-align: center;
  font-size: 26px;
  font-weight: 400;
  margin-top: 24px;
  margin-bottom: 8px;
  line-height: 1.4;

  @media (min-width: 375px) {
    font-size: 32px;
  }
`

const titleVariants: Variants = {
  initial: {
    y: -100,
    opacity: 0,
    visibility: 'hidden'
  },
  animate: {
    y: 0,
    opacity: 1,
    visibility: 'visible',
    transition: {
      type: 'spring',
      bounce: 0.4
    }
  }
}

interface Props {
  children: string
}

const SectionTitle = ({ children }: Props): JSX.Element => {
  return (
    <StyledTitle variants={titleVariants}>
      {children}
    </StyledTitle>
  )
}

export default SectionTitle
