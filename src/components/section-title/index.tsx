import { useInView, motion, Variants } from 'framer-motion'
import { useEffect, useRef } from 'react'
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
  variants?: Variants
  initial?: string
  animate?: string
  custom?: number
}

const SectionTitle = ({
  children,
  ...props
}: Props): JSX.Element => {
  const ref = useRef(null)
  const isInView = useInView(ref, {
    margin: '0px 0px -300px 0px'
  })

  useEffect(() => {
    console.log(isInView)
  }, [isInView])
  return (
    <StyledTitle ref={ref} {...props}>
      {children}
    </StyledTitle>
  )
}

export default SectionTitle
