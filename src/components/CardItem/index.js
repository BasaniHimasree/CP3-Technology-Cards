import './index.css'

const CardItem = props => {
  const {eachCard} = props
  const {title, description, imgUrl, className} = eachCard

  return (
    <li className={`item ${className}`}>
      <h1>{title}</h1>
      <p>{description}</p>
      <img src={imgUrl} alt={title} />
    </li>
  )
}

export default CardItem
