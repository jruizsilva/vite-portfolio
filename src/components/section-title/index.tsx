import { motion } from 'framer-motion'
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
  custom: number
}

const titleVariants = {
  initial: { opacity: 0, y: -50 },
  animate: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3
    }
  }),
  exit: {
    opacity: 0
  }
}

const SectionTitle = ({
  children,
  custom
}: Props): JSX.Element => {
  return (
    <StyledTitle
      variants={titleVariants}
      initial='initial'
      whileInView='animate'
      exit='exit'
      custom={custom}
      viewport={{
        margin: '0px 0px -250px 0px'
      }}
    >
      {children}
    </StyledTitle>
  )
}

export default SectionTitle
