interface Props {
  children: string
  icon: string
  outline?: boolean
}

const Button = ({ children, icon, outline = false }: Props): JSX.Element => {
  const btnClassName = outline ? 'btn-outline' : 'btn'

  return (
    <button className={btnClassName}>
      <span className={`${btnClassName}__text`}>{children}</span>
      <img className={`${btnClassName}__icon`} src={icon} />
    </button>
  )
}

export default Button
