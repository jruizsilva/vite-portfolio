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

interface PropsTitleShowInView {
  isInView: boolean
}

const StyledTitleShowInView = styled(
  motion.h2
)<PropsTitleShowInView>`
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
  isInView?: boolean
}

const SectionTitle = ({
  children,
  isInView,
  ...props
}: Props): JSX.Element => {
  return (
    <>
      {isInView === true ? (
        <StyledTitleShowInView
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: { duration: 1 }
          }}
          isInView={isInView}
          {...props}
        >
          {children}
        </StyledTitleShowInView>
      ) : (
        <StyledTitle {...props}>{children}</StyledTitle>
      )}
    </>
  )
}

export default SectionTitle
