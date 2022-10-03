import { useTranslation } from 'react-i18next'

const Footer = (): JSX.Element => {
  const { t } = useTranslation('footer')
  return (
    <footer className='footer'>
      <p className='footer__p'>
        <span className='footer__span'>
          {t('footer.by')}
        </span>
        <strong className='footer__strong'>
          Jonathan Ruiz Silva
        </strong>
        <span className='footer__span'> - 2022</span>
      </p>
    </footer>
  )
}

export default Footer
