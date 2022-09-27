import { motion, Variants } from 'framer-motion'
import styled from 'styled-components'

const StyledTitle = styled(motion.h2)`
  text-align: center;
  font-size: 24px;
  font-weight: 500;
  padding: 16px 0;

  @media (min-width: 425px) {
    font-size: 32px;
    padding: 24px 0;
  }
  @media (min-width: 768px) {
    font-size: 32px;
    padding: 32px;
  }
`

interface Props {
  children: string
  titleVariants: Variants
}

const SectionTitle = ({
  children,
  titleVariants
}: Props): JSX.Element => {
  return (
    <StyledTitle variants={titleVariants}>
      {children}
    </StyledTitle>
  )
}

export default SectionTitle
