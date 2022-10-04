import { useTranslation } from 'react-i18next'
import { icons } from '../../assets'
import { Anchor } from '../buttons'

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
        <Anchor
          href={github}
          icon={icons.github_white}
          w='100%'
        >
          {t('projects.button.github')}
        </Anchor>
      </li>
      <li className='project__li--button'>
        <Anchor
          href={deploy}
          icon={icons.globe}
          w='100%'
          text='#006cfa'
          border='#006cfa'
          bg='#fff'
        >
          {t('projects.button.deploy')}
        </Anchor>
      </li>
    </ul>
  )
}

export default CardButtons
