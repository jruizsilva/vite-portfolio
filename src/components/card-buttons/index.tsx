import { useTranslation } from 'react-i18next'
import { icons } from '../../assets'
import { AnchorButton } from '../buttons'

interface Props {
  github: string
  deploy: string
}

const CardButtons = ({
  github,
  deploy
}: Props): JSX.Element => {
  const { t } = useTranslation(['projects'])
  return (
    <ul className='project__ul--buttons'>
      <li className='project__li--button'>
        <AnchorButton
          href={github}
          icon={icons.github_white}
          w='100%'
        >
          {t('projects.button.github')}
        </AnchorButton>
      </li>
      <li className='project__li--button'>
        <AnchorButton
          href={deploy}
          icon={icons.globe}
          w='100%'
          text='#006cfa'
          border='#006cfa'
          bg='#fff'
        >
          {t('projects.button.deploy')}
        </AnchorButton>
      </li>
    </ul>
  )
}

export default CardButtons
